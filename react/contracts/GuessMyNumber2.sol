// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract GuessMyNumber2 {
    address public owner;
    uint16 secretNumber;

    uint public jackpot;
    event guessEvent(uint16 guess, string message);

    constructor() {
       owner = msg.sender;
    }

    function guess (uint16 guess_number) public payable{
        //TODO: implement this
        //How much should a guesser pay and what are the rules for wrong
        emit guessEvent(guess_number, "This was your guess");
    }

    function setSecretNumber (uint16 newSecret) public payable {
      require(msg.sender == owner);
      require(msg.value >= 1);
      secretNumber = newSecret;
      jackpot += msg.value;
    }

    function withdrawJackpot () public payable {
        //Right now anyone can withdraw the money at any time!
        //TODO: implement something better
        payable(msg.sender).transfer(jackpot);
    }

}