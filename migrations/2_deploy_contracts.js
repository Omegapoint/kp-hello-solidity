var Adoption = artifacts.require("Adoption");
var GuessMyNumber = artifacts.require("GuessMyNumber");
var GuessMyNumber2 = artifacts.require("GuessMyNumber2");


module.exports = function(deployer) {
  deployer.deploy(Adoption);
  deployer.deploy(GuessMyNumber);
  deployer.deploy(GuessMyNumber2);

};