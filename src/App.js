// import logo from './logo.svg';
import './App.css';
import React from 'react'
import FriendContainer from './Components/FriendContainer';
import MessagesContainer from './Components/MessagesContainer'
export default function App() {
  return (
    <div className="App">
        <FriendContainer />
        <MessagesContainer/>
    </div>
  );
}

