# Metadata Tools

## Description
This repository contains tools for working with and testing IPFS gateways for the purpose of Immutable X metadata.

**PINATA NOTE: Pinata currently doesn't work very well for uploading large directories of 10k+ files inside. The pinata samples can still be used to work with smaller files but we didnt performance test it as we couldnt upload a direcotory of 10k files. When Pinata supports IPFS DAGs or the IPFS Desktop application resolves the technical problem behind the directory upload**

Currently we are testing we two pstorage providers web3 storage and NFT storage as they prooved to be the most efficient at handling our use cases.

## How to use this repository
Clone the repository and install the npm packages `npm install`.

Rename `.env.example` to `.env` and update credentials for the desired gateway

Currently the scripts only provide a way to generate dummy metadata, see `metadata/`

To run a performance test against a directory see `performance_test/`

For Pinata or Web3 storage SDK operations go ttheir respective directory

For uploading directories to NFT Storage service the best method is via the **NFT Up** tool:

https://nft.storage/docs/how-to/nftup/