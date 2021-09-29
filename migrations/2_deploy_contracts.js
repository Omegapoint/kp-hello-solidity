var Adoption = artifacts.require("Adoption");
var GuessMyNumber = artifacts.require("GuessMyNumber");

module.exports = function(deployer) {
  deployer.deploy(Adoption);
  deployer.deploy(GuessMyNumber);

};