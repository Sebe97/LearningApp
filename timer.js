import React from 'react';
import Countdown from 'react-countdown-now';

class Timer extends React.Component{
    render(){
        let startStop=true
        return(
            <div>

                <Countdown 
                date={Date.now() + 10000}
                autoStart={this.props.startStop}
                /> 

                <button onClick = {()=>{}}>
                    Start
                </button>
            </div>
            )
    }
}

export default Timer;