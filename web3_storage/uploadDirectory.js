// Import necessary modules
const { Web3Storage, getFilesFromPath } = require('web3.storage');
require('dotenv').config({ path: __dirname + '/./../.env' });

const MAX_RETRIES = 3; // Maximum number of retry attempts
const RETRY_DELAY = 2000; // Delay in milliseconds between retries
const TOKEN = process.env.W3S_API_KEY; // Replace with your actual Web3.Storage API key

/**
 * Uploads a directory to Web3.Storage
 * @param {string} directoryPath - The path of the directory to be uploaded
 * @param {string} token - Web3.Storage API token
 */
async function uploadDirectoryToWeb3Storage(directoryPath, token) {
  const client = new Web3Storage({ token });
  
  // Retrieve the list of files from the specified directory
  const files = await getFilesFromPath(directoryPath);

  // Modify the file names to remove the folder name from the file path
  const modifiedFiles = files.map(file => {
    const folderNameRegex = /\/metadata_\d+\//; // Regular expression to match the folder name pattern
    const fileName = file.name.replace(folderNameRegex, ''); // Remove the folder name from the file path
    return { ...file, name: fileName }; // Create a new object with the modified name
  });
  
  
  // Callback function called when the root CID is ready
  const onRootCidReady = (cid) => {
    console.log('Root CID:', cid);
  };

  // Callback function called when a chunk is stored
  const onStoredChunk = (size) => {
    console.log('Stored chunk:', size, 'bytes');
  };

  let retries = 0;
  while (retries < MAX_RETRIES) {
    try {
      // Upload the modified files to Web3.Storage
      const cid = await client.put(modifiedFiles, { onRootCidReady, onStoredChunk });
      console.log('Uploaded directory with CID:', cid);
      return; // Upload successful, exit the function
    } catch (error) {
      console.error('Error uploading directory:', error);
      retries++;
      if (retries < MAX_RETRIES) {
        console.log(`Retrying upload in ${RETRY_DELAY / 1000} seconds...`);
        await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY));
      }
    }
  }

  console.error('Max retries reached. Upload failed.');
}

// Get the directory path from the command-line argument
const directoryPath = process.argv[2];
uploadDirectoryToWeb3Storage(directoryPath, TOKEN);
