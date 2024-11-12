
const hardhat = require("hardhat");

async function main() {
    const ethers = hardhat.ethers
    const [deployer] = await ethers.getSigners();
    console.log("Deploying the contract with address:", deployer.address);
  
    const VersaX = await ethers.getContractFactory("VersaX");
    const token = await VersaX.deploy();
    console.log("VersaX token deployed to:", token.address);
  }
  
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  