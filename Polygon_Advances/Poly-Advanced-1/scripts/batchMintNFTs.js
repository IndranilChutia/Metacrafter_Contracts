const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const contractAddress = process.env.CONTRACT_ADDRESS; // Replace with your contract address
  const contract = await ethers.getContractAt("NFTC", contractAddress);
  const accountAddress = process.env.PUBLIC_KEY; // Replace with the recipient account address
  const metadataURIs = [
    "https://gateway.pinata.cloud/ipfs/QmTuTNJq1NQsHpgFPKvBdE4SKxDNoFEyfp2ETS1uBwjM3b",
    "https://gateway.pinata.cloud/ipfs/QmfBeVvxNj4pvnLbNPxQdH455tC15sAEvRFoSoV1oa5hBo",
    "https://gateway.pinata.cloud/ipfs/QmUdCBqB5FXAVvCCvL6NCse4kTSbr4fVEZQexDB8xndwa5",
    "https://gateway.pinata.cloud/ipfs/QmaBkzrasoKyoi6NQgsXNeqKNnx3pLsBUu1gPWxgzi9iHb",
    "https://gateway.pinata.cloud/ipfs/QmbHitZNJQCy3iiPCQoNBrF8YFhVzxFU5o5f9tP4qCnH2N",
  ];
  const numNFTs = 5; // Number of NFTs to mint

  for (let i = 0; i < numNFTs; i++) {
    const metadataURI = metadataURIs[i];
    console.log(`Minting NFT #${i + 1} with metadataURI: ${metadataURI}`);

    // Call the contract's mintNFT function
    const transaction = await contract.mintNFT(accountAddress, metadataURI);
    await transaction.wait();

    console.log(`NFT #${i + 1} minted successfully`);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
