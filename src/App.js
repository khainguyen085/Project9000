import './App.css';
import React from 'react'
import SearchBar from './Components/SearchBar'
import Weathers from './Components/Weathers'
const apiKey = "4d8fb5b93d4af21d66a2948710284366";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], message: '' };
    this.getWeatherByCityName = this.getWeatherByCityName.bind(this);
  }

  getWeatherByCityName(cityName) {
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === 404 + '') {
          this.setState({ message: 'Please seacrh for a valid city 😩' });
        } else {
          let currentData = this.state.data;
          currentData.push(data);
          this.setState({ data: currentData, message: '' });
        }
      });
  } 
  render(){
    return(
      <div className="App">
        <SearchBar
          getWeatherByCityName={this.getWeatherByCityName}
          message={this.state.message}
        />
        <Weathers weathers={this.state.data} />
      </div>
    );
  }
}
