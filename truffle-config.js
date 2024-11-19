module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*", // Match any network id
        },
    },
    compilers: {
        solc: {
            version: "0.8.0",
        },
    },
};

//Update for Ropsten network
const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

module.exports = {
    networks: {
        ropsten: {
            provider: () => new HDWalletProvider(process.env.PRIVATE_KEY, `https://ropsten.infura.io/v3/${process.env.INFURA_PROJECT_ID}`),
            network_id: 3,
            gas: 5500000,
        },
    },
    compilers: {
        solc: {
            version: "0.8.0",
        },
    },
};
