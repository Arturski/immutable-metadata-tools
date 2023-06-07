# Web3.Storage Directory Upload

This script enables you to upload a directory to Web3.Storage, a decentralized storage solution built on IPFS. The script uses the Web3.Storage JavaScript library to handle the upload process.

## Prerequisites

Before running the script, ensure that you have the following:

- Node.js installed on your system
- A valid Web3.Storage API key

## Setup

Update the `.env` file in the root directory of the cloned repository and add your Web3.Storage API key to it. The file should look like this:

`W3S_API_KEY=YOUR_API_KEY_HERE`

Replace YOUR_API_KEY_HERE with your actual Web3.Storage API key.

## Usage
To upload a directory to Web3.Storage, run the following command:
```shell
node uploadDirectory.js <directory_path>
````

Replace `<directory_path>` with the path to the directory you want to upload. The script will upload the directory and output the resulting CID (Content Identifier) once the upload is complete.

To pin a set of files you can use the pin.js script. Add a number of IPFS CID hasshes to the list inside the script and run it.

**NOTE: This requires a feature to be enabled on your web3.storage account**

## Retry Behavior
The script includes retry logic in case of upload failures. It will attempt to upload the directory a maximum of three times with a delay of 2 seconds (configurable) between retries. If the maximum number of retries is reached, the script will output an error message indicating that the upload failed.

## Customization
You can customize the following variables in the script according to your needs:

`MAX_RETRIES`: The maximum number of retry attempts in case of upload failures.
`RETRY_DELAY`: The delay in milliseconds between retry attempts.
`TOKEN`: The Web3.Storage API key used for authentication. Make sure to set the correct value in the .env file.
Feel free to modify the script to fit your specific requirements or integrate it into your own applications.