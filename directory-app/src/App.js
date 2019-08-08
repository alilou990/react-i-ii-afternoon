import React, {Component} from 'react';

//components
import Navbar from './components/Navbar'
import Main from './components/Main'

//stylesheets
import './stylesheets/reset.css'
import './stylesheets/App.css'

export default class App extends Component{




  render(){
    return(
      <div className="parent-container">
        <Navbar />
        <Main />

      </div>
    )
  }
}
