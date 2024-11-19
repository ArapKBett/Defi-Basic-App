// migrations/2_deploy_contracts.js
const MyDeFiApp = artifacts.require("MyDeFiApp");

module.exports = function (deployer) {
    deployer.deploy(MyDeFiApp);
};
