require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: "0.8.17",
  networks: {
    arbitrum: {
      url: "https://arbitrum-mainnet.infura.io/v3/b3577f07de8c447284b67ca924a8e742",
      accounts: ["PRIVATE_KEY_HERE"],
    },
  },
  etherscan: {
    apiKey: {
      arbitrumOne: "",
    }
  },
};

