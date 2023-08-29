const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  // Define the contract name, symbol, and description
  const name = "Fish NFT Collection";
  const symbol = "NFTC";
  const promptDesc =
    "Fish collected from the Antractic Ocean";

  const [deployer] = await ethers.getSigners();
  const deployerAddress = await deployer.getAddress();
  console.log(`Contract Deployer's address: ${deployerAddress}`);

  // Deploy the NFTC contract
  const NFTC = await ethers.getContractFactory("NFTC");
  const nftc = await NFTC.deploy(promptDesc, name, symbol);

  // Wait for the contract to be mined
  await nftc.deployed();

  // Print the contract address and transaction hash
  console.log("NFTC deployed to:", nftc.address);
  console.log("Transaction hash:", nftc.deployTransaction.hash);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
