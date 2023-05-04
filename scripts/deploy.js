const hre = require("hardhat");

async function main() {
  const [owner, acc1, acc2, acc3] = await hre.ethers.getSigners();
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const contract = await RoboPunksNFT.deploy();
  await contract.deployed();
  console.log(
    "Account address: ",
    owner.address,
    " contract deployed to:",
    contract.address
  );
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
