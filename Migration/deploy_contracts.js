const LandRegistry = artifacts.require("landregistry.sol");

module.exports = function (deployer) {
    deployer.deploy(LandRegistry.sol);
};
