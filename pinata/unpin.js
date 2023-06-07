const pinataSDK = require('@pinata/sdk');
require('dotenv').config({path:__dirname+'/./../.env'});

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);

async function unpinHashes(hashes) {
  try {

    for (const hash of hashes) {
      const result = await pinata.unpin(hash);
      console.log(`Hash '${hash}' status:`, result);
    }
  } catch (error) {
    console.error('Failed to check pin status:', error);
  }
}
// List of hashes to check e.g QmcjMu8PDQpPZJF9zWiuWx79JFDmHrP6AqtVCuJJeiUfMq
const hashList = ['', ''];

unpinHashes(hashList);