import { Component } from "react";
import { WeatherContainer1, WeatherCard2, WeatherCard1, WeatherWrapper1, WeatherH1 } from './WeatherElements';
import UserLocation from './UserLocation';
import Navbar from './NavbarWeather';
import './weather.css';
import Axios from 'axios';
//import {WeatherCard1 from './WeatherElements'
class Weather extends Component {

  state = {

    userPosition: {
      latitude: /*19.1463424*/ null,
      longitude: /*72.941568*/ null
    },
    timeStamp: null,
    regionInput: "",
    loading: false
  }

  componentDidMount() {
    //check whether geolocation is supported
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        console.log(position);
        //get the lat and long of your device
        // let pos = {
        //   latitude: position.coords.latitude,
        //   longitude: position.coords.longitude
        // }
        this.setState({ userPosition: { latitude: position.coords.latitude, longitude: position.coords.longitude }, timeStamp: position.timestamp });
        //this.setState({ loading: true });
      })
    }
    this.setState({ loading: true });
  }

  //update the value of the the input field with state
  changeRegion = (value) => {
    this.setState({ regionInput: value })
  }

  render() {
    return (this.state.loading && !this.state.userPosition.latitude ? (
      <center><h1>Loading...</h1></center>
    ) : (
      <WeatherContainer1>

        <div className="App" id='weather'>
          <div className="container">

            <WeatherCard2>
              <WeatherH1>Weather</WeatherH1>
            </WeatherCard2>
            <UserLocation location={this.state.userPosition} timeStamp={this.state.timeStamp} />
          </div>
        </div>

      </WeatherContainer1>
    )


    );
  }

}

export default Weather;