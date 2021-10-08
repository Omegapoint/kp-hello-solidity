// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract GuessMyNumber {
    address public owner;
    uint16 secretNumber;

    event guessEvent(uint16 guess, string message);
    event secretEvent(uint16 number);


    constructor() {
       owner = msg.sender;
    }

    function guess (uint16 guess_number) public {
        //TODO implement this!
        emit guessEvent(guess_number, "This was your guess");
    }

    function setSecretNumber (uint16 newSecret) public {
      require(msg.sender == owner);
      secretNumber = newSecret;
      emit secretEvent(newSecret);
    }

}