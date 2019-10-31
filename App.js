import React from 'react';
import logo from './logo.svg';
import './App.css';
import LearningSessions from './learningSessions';
import Timer from './timer';

class App extends React.Component {
  render(){
    return(
      <div className="mainDiv">
        <LearningSessions/>
        <Timer startStop = {true}/>
      </div>

    )
  }
}

export default App;
