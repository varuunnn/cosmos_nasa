import React from 'react'
import Navbar from './NavbarWeather'
import { WeatherH1, WeatherContainer, WeatherCard, WeatherCard1, WeatherWrapper, WeatherWrapper1 } from './WeatherElements'
export default function UserLocation(props) {
  return (
    <div className="user-weather">
      <WeatherWrapper1>
        <WeatherCard1>
          <div className="row">
            <div className="col-md-3 weather-temp">
              <h1>31<sup>o</sup>C , Sunny </h1>
              <p>Ghatkopar,Mumbai , Maharahstra</p>
              <img className="mainImg" src="https://th.bing.com/th/id/OIP.WMNB8GglnLlV9aaNaaNTIgHaHa?w=178&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="weather-img" />
            </div>
          </div>
        </WeatherCard1>
        <div className="row">
          <WeatherCard1 style={{height: 115}}>
            <div className="col-md-3 weather-info">
              <p><b>Pressure</b>(millibar)</p>
              <h2>1007</h2>
            </div>
          </WeatherCard1>
          <WeatherCard1 style={{height: 115}}>
            <div className="col-md-3 weather-info">
              <p><b>Precipitation</b>(mm)</p>
              <h2>0.0</h2>
            </div>
          </WeatherCard1>
        </div>
      </WeatherWrapper1>
      <WeatherWrapper>
        <WeatherCard>
          <div className="col-md-3 weather-info">
            <p><b>Wind</b>(km/hr)</p>
            <h2>22.2</h2>
          </div>
        </WeatherCard>
        <WeatherCard>
          <div className="col-md-3 weather-info">

            <p><b>Humidity</b>(%)</p>
            <h2>72%</h2>
          </div>
        </WeatherCard>
        <WeatherCard>
          <div className="col-md-3 weather-info">
            <p><b>Visibility</b></p>
            <h2>3km</h2>
          </div>
        </WeatherCard>
        <WeatherCard>
          <div className="col-md-3 weather-info">
            <p><b>Wind dir</b></p>
            <h2>W</h2>
          </div>
        </WeatherCard>
      </WeatherWrapper>
    </div>
  )
}
