import React from 'react';
import Countdown from 'react-countdown-now';

class Timer extends React.Component{
    render(){
        this.state={
            startStop: false,
        }
        const {startStop} = this.state;
        return(
            <div>

                <Countdown 
                date={Date.now() + 10000}
                autoStart={startStop}
                /> 

                <button onClick = { () => {this.setState({startStop:true})} }>
                    Start/Stop
                </button>
            </div>
            )
    }
}

export default Timer;