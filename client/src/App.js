import React, { Component } from "react";
import GuessMyNumber from "./contracts/GuessMyNumber.json";
import getWeb3 from "./getWeb3";
import Player1 from "./Player1";
import Player2 from "./Player2";


import "./App.css";
import LogDashboard from "./LogDashboard";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      const deployedNetwork = GuessMyNumber.networks[networkId];
      const instance = new web3.eth.Contract(
        GuessMyNumber.abi,
        deployedNetwork && deployedNetwork.address,
      );

      // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      var event = instance.events.guessEvent;
      this.setState({ web3, accounts, contract: instance , event}, this.runExample);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
  };

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Good to Go!</h1>
        <h2>Player 1</h2>
        <Player1 contract={this.state.contract} accounts={this.state.accounts} />
        <h2>Player 2</h2>
        <Player2 contract={this.state.contract} accounts={this.state.accounts} />
        <h2>Log</h2>
        <LogDashboard event={this.state.event} contract ={this.state.contract} />
      </div>
    );
  }
}

export default App;
