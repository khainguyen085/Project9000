import './App.css';
import {Header} from './components/Header'
import {SearchBar} from './components/SearchBar'
import emojiList from './emojiList';
import {Emoji} from './components/Emoji'
import React from 'react'

function App() {
  console.log(emojiList)
  let elist_ = []
  for (let i=0;i<20;i++){
    elist_.push(
      <Emoji symbol={emojiList[i].symbol} title={emojiList[i].title} />
    )
  }
  return (
    <React.Fragment>
      <Header />
      <SearchBar />
      {elist_}
    </React.Fragment>
  );
}
export default App;
