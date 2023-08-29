const fs = require("fs");
const path = require("path");

// Image URLs for the 5 NFTs
const imageUrls = [
  "https://gateway.pinata.cloud/ipfs/QmaKXnTi1de9Np8f45s5tKPpNspbChFUFY5Z7iPkw3KvfA",
    "https://gateway.pinata.cloud/ipfs/QmcN372BsbwdyufHQCeGTUAQ8LVqsAqJUaMuxCwo8i1tNX",
];

// NFT information
const name = "Fish in a bowl";
const description = "Fish in different colored bowls";

// Create NFThub directory if it doesn't exist
const dir = "./NFThub";
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir);
}

// Generate metadata for each NFT
for (let i = 0; i < imageUrls.length; i++) {
  const nftData = {
    name: `${name} #${i + 1}`,
    description: description,
    image: imageUrls[i],
  };

  const nftJson = JSON.stringify(nftData, null, 2);
  const fileName = `nft${i + 1}.json`;
  const filePath = path.join(dir, fileName);

  fs.writeFileSync(filePath, nftJson);
}

console.log("Metadata files generated successfully!");
