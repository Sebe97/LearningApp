import React from 'react';
import Session from './components/session.js'
class LearningSessions extends React.Component{
    
    
    constructor(props) {
        
        super(props);
        this.state = {
            totalSessions:1,
            sessions:[
                {
                    sessionNo:1,
                    sessionName:"15 Min Session",
                },
            ]
        };
        this.handleAddSession = this.handleAddSession.bind(this);
    }
    render(){

        const {
            sessions,
            totalSessions,
        } = this.state

        return(
            <div>
                {
                    sessions.map((session)=>
                    <Session name = {session.sessionName} sessionNo={session.sessionNo}/>
                    )

                }
                    <p>The current number of sessions is = {totalSessions}</p>
                    <button onClick= { this.handleAddSession }>Add a session</button>
            </div>
        )
    }
    handleAddSession(){
        // this function will:
        // - increase the contor of the sessions 
        // - add another row of session
        
        const { 
            sessions,
            totalSessions,

         } = this.state;
         
        let newSession = {
            sessionNo: totalSessions+1,
            sessionName: '20 Min Session',
        }
        this.setState({
            totalSessions:totalSessions+1,
            sessions: [...sessions,newSession]
        })
    }
}

export default LearningSessions;