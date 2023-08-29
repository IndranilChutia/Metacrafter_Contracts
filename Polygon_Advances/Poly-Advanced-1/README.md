# NFT Minting and Transfer Project

Welcome to the NFT Minting and Transfer project! This undertaking revolves around the creation and management of ERC-721 compliant NFTs (Non-Fungible Tokens). The following sections provide an overview of the project's components and their functionalities.

## Smart Contract: NFTC

The core of the project is the smart contract, `NFTC.sol`, written in Solidity. This contract is built upon the foundations of OpenZeppelin's ERC721 contract, which ensures conformity with the ERC-721 standard. The contract is designed to facilitate the minting of new NFTs while retaining metadata URIs for each individual token. The heart of the contract is the `mintNFT` function, which enables the creation of new NFTs.

## Deployment Script: `deploy.js`

The `deploy.js` script is responsible for deploying the `NFTC` contract to the Goerli test network. This script leverages Hardhat, a development tool for Ethereum, to ensure a seamless deployment process.

## NFT Minting Script: `batchMint.js`

Incorporating the `batchMint.js` script allows the project to mint multiple NFTs on the Goerli test network. These newly minted NFTs are endowed with metadata URIs, adding distinct characteristics to each token.

## NFT Transfer Script: `batchTransfer.js`

The `batchTransfer.js` script assumes the critical role of transferring NFTs from the Goerli test network to the Mumbai test network. This is executed by utilizing both the `NFTC` contract and the Root Tunnel contract on the Mumbai network for smooth cross-network transfers.

## NFT Balance Check Script: `balance.js`

With the `balance.js` script, you can effortlessly check the NFT balance of a specified account on the Mumbai test network. This script relies on the information provided in the `.env` file.

## Setup and Execution

To embark on this journey:

1. Configure your environment by intalling all the packages using ```npm i``` then ```npx hardhat node``` and set up necessary variables in the `.env` file.

2. Deploy the contract using the `deploy.js` script:

   ```
   npx hardhat run scripts/deploy.js --network goerli
   ```

3. Mint NFTs through the `batchMintNFTs.js` script:

   ```
   npx hardhat run scripts/batchMintNFTs.js --network goerli
   ```

4. Facilitate NFT transfers using the `batchTransferNFTs.js` script:

   ```
   npx hardhat run scripts/batchTransferNFTs.js --network goerli
   ```

5. To assess NFT balance on the Mumbai test network, rely on the `balance.js` script:

   ```
   npx hardhat run scripts/balance.js --network mumbai
   ```

Remember, the scripts can be tailored to align with your specific requirements.

## Authors and License

- Project by: [Indranil Chutia](https://github.com/IndranilChutia)
- This project is released under the MIT License, granting you the freedom to utilize, modify, and distribute the code in accordance with the license terms.