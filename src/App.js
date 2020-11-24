import React from 'react'
import {Header} from './Components/Header'

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      title:'Mi cay',
      content:'Mon nay rat ngon',
      img:'',
      video:''
    }
  }

  render(){
    return(
      <Header />
    );
  }
}

