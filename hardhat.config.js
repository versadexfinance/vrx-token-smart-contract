require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.17",
  networks: {
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/<key>",
      accounts: ["PRIVATE_KEY_HERE"],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: "",
    }
  },
};

