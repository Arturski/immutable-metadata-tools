import { Web3Storage } from 'web3.storage'
require('dotenv').config({path:__dirname+'/./../.env'});

async function pinDagCIDs(cids) {
  // Instantiate Web3.Storage client
  const client = new Web3Storage({ token: process.env.W3S_API_KEY });

  try {
    for (const cid of cids) {
      // Pin the DAG CID to Web3.Storage
      const { cid: pinnedCID, name, size, url } = await client.put([cid]);

      // Print the pin details
      console.log(`DAG CID '${pinnedCID}' pinned to Web3.Storage.`);
      console.log(`Name: ${name}`);
      console.log(`Size: ${size} bytes`);
      console.log(`URL: ${url}`);
    }
  } catch (error) {
    console.error('Failed to pin DAG CIDs:', error);
  }
}

// List of CIDs to pin e.g QmczzXveC6aKEk2cHCWJYidihoSuYk1PStqXDgPnbtZoZh
const cidList = ['', ''];

pinDagCIDs(cidList);
