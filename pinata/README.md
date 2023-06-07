# Pinata
**The tools from pinata are operational however there is currently an issue with using pinata for large direcotries which makes it incompatible with large metadata sets.**

##Pinning and Unpinning with Pinata
This directory contains scripts for interacting with the Pinata service, a platform for pinning and managing content on IPFS. There are three scripts available, each serving a different purpose.

##Pre-requisites
Before running the scripts, ensure that you have the following:

1. Node.js installed on your system.
2. A Pinata API key and secret API key. Make sure to set these values in the .env file located in the root directory.

Install the required dependencies by running the following command:
`npm install`

Create a `.env` file in the root directory of the cloned repository and add your Pinata API key and secret API key to it. The file should look like this:

##Usage
1. Check Pin Status - The script checkPinStatus.js allows you to check the pin status of one or more hashes. To use this script, update the hashList array with the hashes you want to check, and then run the following command:
`node check.js`
 The script will display the status of each hash provided.
2. Pin CID - The script pinCID.js enables you to pin a specific CID to Pinata. To use this script, replace the cid variable with the CID you want to pin, and then run the following command:
`node pin.js`
The script will pin the specified CID to Pinata and display the pin details.
3. Unpin Hashes - The script unpinHashes.js allows you to unpin one or more hashes from Pinata. To use this script, update the hashList array with the hashes you want to unpin, and then run the following command:
`node unpin.js`
The script will unpin the specified hashes from Pinata and display the status of each unpinning operation.

## Customize
Feel free to modify the scripts according to your requirements. You can add additional functionality, handle errors differently, or integrate them into your own projects.

Please note that you need to replace the YOUR_API_KEY and YOUR_SECRET_API_KEY placeholders in the .env file with your actual Pinata API credentials.

Make sure to install the required dependencies by running npm install before using the scripts.