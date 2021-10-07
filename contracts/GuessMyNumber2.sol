pragma solidity ^0.5.0;

contract GuessMyNumber2 {
    address public owner;
    uint16 secretNumber;

    uint public jackpot;
    event guessEvent(uint16 guess, string message);

    constructor() public {
       owner = msg.sender;
    }

    function guess (uint16 guess) public payable{
        //TODO: implement this
        //Perhaps the guesser should be required to pay
        emit guessEvent(guess, "This was your guess");
    }

    function setSecretNumber (uint16 newSecret) public payable {
      require(msg.sender == owner);
      require(msg.value >= 1);
      secretNumber = newSecret;
      jackpot += msg.value;
    }

    function withdrawJackpot () public payable {
        //Right now anyone can withdraw the money!
        //TODO: implement something better!
        msg.sender.transfer(jackpot);
    }

}