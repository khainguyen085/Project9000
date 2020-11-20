import logo from './logo.svg';
import React from 'react'
import './App.css';
import {FriendContainer} from './Components/FriendContainer'
import {MessageContainer} from './Components/MessageContainer'
function App() {
  return (
    <>
      <FriendContainer className="frcont"/>
      <MessageContainer className="mescont"/>
    </>
  );
}

export default App;
