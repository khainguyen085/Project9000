import './App.css';
import React from 'react'
import {Seachbar} from './Components/Seachbar'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={}
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleSubmit(){
    console.log('hello')
  }
  handleKeyDown(){
    console.log('done')
  }
  render() {
    return (
      <div className="App">
        <h1>Weather App</h1>
        <form>
          <Seachbar handleKeyDown={this.handleKeyDown} />
          <button onChange={this.handleSubmit} type='submit'>Search</button>
        </form>
      </div>
    );
  }
}
