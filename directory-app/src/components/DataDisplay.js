import React, {Component} from 'react';
import Data from './data'
import Footer from './Footer'
import '../stylesheets/DataDisplay.css'

export default class DataDisplay extends Component {
    constructor(){
        super();

        this.state = {
            index: 0
        }
    }

    previous = () => {
        this.setState({index: this.state.index - 1})
        

    }

    next = () => {
        this.setState({index: this.state.index + 1})
        
    }

    render(){
        console.log(this.state.index)
        return(
            <div className="dataDisplay-container">
                <h1 className="counter">{Data[this.state.index].count}</h1>
                <div className="text-container">
                    <h1><span id="name-first-last">{Data[this.state.index].name.first} {Data[this.state.index].name.last}</span></h1>
                    <h3 className="text"><span id="static-text">From:</span> {Data[this.state.index].city}, {Data[this.state.index].country}</h3>
                    <h3 className="text"><span id="static-text">Employer:</span> {Data[this.state.index].employer}</h3>
                    <h3 className="text"><span id="static-text">Title:</span> {Data[this.state.index].title}</h3>
                    <div className="text"> <span id="static-text">Favorite Movies:</span>
                    <ol className="list-container">
                        <li className="text">1. {Data[this.state.index].favoriteMovies[0]}</li>
                        <li className="text">2. {Data[this.state.index].favoriteMovies[1]}</li>
                        <li className="text">3. {Data[this.state.index].favoriteMovies[2]}</li>
                    </ol>
                </div>
                </div>
                <Footer previous={this.previous} next={this.next}/>
            </div>
        )
    }
}