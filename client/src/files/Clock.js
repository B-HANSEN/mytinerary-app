import React from 'react';

class Clock extends React.Component {
    
    state = { 
        date: new Date()
    }

    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    tick() {
      this.setState({
        date: new Date()
      });   
    }
  
    render() {
      return (
        <div className="timeStamp">
          <p>{this.state.date.toLocaleTimeString()}</p>
        </div>
      );
    }
  }

  export default Clock