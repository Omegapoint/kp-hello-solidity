import React from 'react';


class LogDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ['']};
    this.event = props.event;
    this.contract = props.contract;
  }

  componentDidMount = () => {
    const component = this
    this.contract.events.allEvents("AllEvents",{  
      fromBlock: 'latest',
      }, function (error, event) {
          if (error){
            alert("error while subscribing to event")
            console.log(error)
          }
          if(event.event === "guessEvent"){
            component.setState(prevState => {
              return { value: [...prevState.value, event.returnValues[0] + " - " + event.returnValues[1]] }
            })
          } else if(event.event === "secretEvent") {
            component.setState(prevState => {
              return { value: [...prevState.value, event.returnValues[0] + " - is the secret number"] }
            })
          }

        }
      );
  }

  render() {
    return (
      this.state.value.map( v=> {
      return (<li key={v}>
        {v}
      </li>)
      }
      )
    );
    }
}

export default LogDashboard;
