require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
const dotenv = require("dotenv");
dotenv.config();

const privateKey = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/<key>",
      accounts: [privateKey],
    },
    // Ethereum sepolia testnet
    sepolia: {
      accounts: [privateKey],
      chainId: 11155111,
      url: "https://sepolia.drpc.org",
  },
 // etherscan: {
 //   apiKey: {
 //     arbitrumOne: "",
 //  }
 //},
}
};

