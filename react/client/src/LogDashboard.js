import React from 'react';


class LogDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ['']};
    this.event = props.event;
    this.contract = props.contract;
  }

  componentWillMount = () => {
    this.contract.events.allEvents("AllEvents",{  
      fromBlock: 'latest',
      }, function (error, event) {
          if (error){
            alert("error while subscribing to event")
            console.log(error)
          }
          console.log(event.returnValues);
          }
      );
  }

  render() {
    return (
      <li key={this.state.value}>
        {this.state.value}
      </li>
    );
  }
}

export default LogDashboard;
