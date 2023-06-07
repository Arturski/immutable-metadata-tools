const pinataSDK = require('@pinata/sdk');
require('dotenv').config({path:__dirname+'/./../.env'});

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);

async function checkPinStatus(hashes) {
  try {
    const filters = {
      sort: 'ASC',
      limit: 10,
      offset: 0,
    };

    for (const hash of hashes) {
      filters.ipfs_pin_hash = hash;

      const result = await pinata.pinJobs(filters);
      console.log(`Hash '${hash}' status:`, result);
    }
  } catch (error) {
    console.error('Failed to check pin status:', error);
  }
}
// List of hashes to check e.g QmcbFpadsxNV7r9Rwcegt4H1BRHtiqSMwDjkJNxc9tWswE
const hashList = ['', '', ''];

checkPinStatus(hashList);
