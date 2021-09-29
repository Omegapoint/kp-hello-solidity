pragma solidity ^0.5.0;

contract GuessMyNumber {
    address public owner;
    uint16 secretNumber;

    event guessEvent(uint16 guess, string message);

    constructor() public {
       owner = msg.sender;
    }

    function guess (uint16 guess) public {
        emit guessEvent(guess, "This was your guess");
    }

    function setSecretNumber (uint16 newSecret) public {
      require(msg.sender == owner);
      secretNumber = newSecret;
    }

}