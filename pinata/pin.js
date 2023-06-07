const pinataSDK = require('@pinata/sdk');
require('dotenv').config({path:__dirname+'/./../.env'});

const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_SECRET_API_KEY = process.env.PINATA_SECRET_API_KEY;

const pinata = new pinataSDK(PINATA_API_KEY, PINATA_SECRET_API_KEY);

async function pinCID() {
  // Specify the CID you want to pin e.g QmdCdaAcAimq7KZK9to7whUzpn1r8TpsqNTFoEn45LN1t1
  const cid = '';

  try {
    // Pin the CID to Pinata
    const result = await pinata.pinByHash(cid);

    // Print the pin details
    console.log(`CID '${cid}' pinned to Pinata successfully.`);
    console.log('Pin Details:', result);
  } catch (error) {
    console.error('Failed to pin CID to Pinata:', error);
  }
}

pinCID();
