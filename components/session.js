import React from 'react';
const DATA = 'text'
class Session extends React.Component{

    render(){
        return(
            <div >
                <div>
                    {this.props.sessionNo}# {this.props.name}
                    <input id='checkbox1' type="checkbox" ></input>
                </div>

            </div>
        )
    }

}

export default Session;