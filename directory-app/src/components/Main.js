import React, {Component} from 'react';

import DataDisplay from './DataDisplay'

import '../stylesheets/Main.css'

export default class Main extends Component {
    

    render(){
        return (
            <div className="main-container">
                <DataDisplay />
                
            </div>
        )
    }
}