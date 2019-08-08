import React, {Component} from 'react';

export default class Footer extends Component {
    render(){
        return(
            <div className="button-container">
            <button onClick={this.props.previous}> Previous </button>
            <button onClick={this.props.next}> Next </button>
        </div>
        )
    }
}