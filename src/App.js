import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'
import UnderFooter from './Components/UnderFooter'
import SearchBar from './Components/SearchBar';
function App() {
  return (
    <>
      <Header />
      <SearchBar/>
      <Main />
      <UnderFooter/>
    </>
  );
}

export default App;
