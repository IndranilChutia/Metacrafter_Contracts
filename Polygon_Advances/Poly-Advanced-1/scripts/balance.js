const { ethers } = require("hardhat");
require("dotenv").config();

const polygonContractAddress = process.env.POLYGON_CONTRACT;
const accountAddress = "0xbf58Fb0302C87056c3A5BDeeB16e50d6419178f1";

async function balance() {
  const polygonContract = await ethers.getContractAt(
    "NFTC",
    polygonContractAddress
  );

  const balanceOnMumbai = await polygonContract.balanceOf(accountAddress);
  console.log(`Balance of NFTs on Mumbai: ${balanceOnMumbai}`);
}

balance().catch((err) => {
  console.log(err);
});
