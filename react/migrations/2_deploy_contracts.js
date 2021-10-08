var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var GuessMyNumber = artifacts.require("./GuessMyNumber.sol");
var GuessMyNumber2 = artifacts.require("./GuessMyNumber2.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(GuessMyNumber);
  deployer.deploy(GuessMyNumber2);

};
