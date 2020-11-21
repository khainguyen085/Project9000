import './App.css';
import React from 'react'
import {Seachbar} from './Components/Seachbar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
    this.handleSub=this.handleSub.bind(this)
  }
  handleSub(e){
    e.preventDefault()
    console.log('hello')
  }
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form>
          <Seachbar/>
          <button onChange={this.handleSub} type='submit'>Search</button>
        </form>
      </div>
    );
  }
}
