import React, { useState, useEffect } from 'react'
import Navbar from './NavbarWeather'
import { WeatherH1, WeatherContainer, WeatherCard, WeatherCard1, WeatherWrapper, WeatherWrapper1 } from './WeatherElements'

var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]

const UserLocation = ({ location }) => {
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&exclude=hourly,daily&appid=6d6b972a7fed81bbe74cfc6cab92c9be`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    }
    fetchData();
  }, [])

  const [weather, setWeather] = useState();

  return (
    <>
      {weather &&
        <div className="user-weather">
          <WeatherWrapper1>
            <WeatherCard1>
              <div className="row">
                <div className="col-md-3 weather-temp">
                  <h1 style={{ fontSize: "3rem" }}>{weather.current.temp}<sup>o</sup>C , {weather.current.weather[0].main} </h1>
                  <p style={{ fontSize: "1.3rem", margin: "0" }}>Ghatkopar, Mumbai , Maharahstra</p>
                  <img className="mainImg" src={`http://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} alt="weather-img" />
                </div>
              </div>
            </WeatherCard1>
            <div className="row">
              <WeatherCard1 style={{ height: 110 }}>
                <div className="col-md-3 weather-info">
                  <p style={{ fontSize: "2rem", margin: "0" }}>Pressure (millibar)</p>
                  <h2>{weather.current.pressure} hPa</h2>
                </div>
              </WeatherCard1>
              <WeatherCard1 style={{ height: 110 }}>
                <div className="col-md-3 weather-info">
                  <p style={{ fontSize: "2rem", margin: "0" }}>Precipitation (mm)</p>
                  <h2>{weather.minutely[0].precipitation} mm</h2>
                </div>
              </WeatherCard1>
            </div>
          </WeatherWrapper1>
          <WeatherWrapper>
            <WeatherCard>
              <div className="col-md-3 weather-info">
                <p style={{ fontSize: "1.5rem", margin: "0" }}>Wind (m/s)</p>
                <h2>{weather.current.wind_speed} m/s</h2>
              </div>
            </WeatherCard>
            <WeatherCard>
              <div className="col-md-3 weather-info">

                <p style={{ fontSize: "1.5rem", margin: "0" }}>Humidity (%)</p>
                <h2>{weather.current.humidity}%</h2>
              </div>
            </WeatherCard>
            <WeatherCard>
              <div className="col-md-3 weather-info">
                <p style={{ fontSize: "1.5rem", margin: "0" }}>Visibility</p>
                <h2>{weather.current.visibility / 1000}km</h2>
              </div>
            </WeatherCard>
            <WeatherCard>
              <div className="col-md-3 weather-info">
                <p style={{ fontSize: "1.5rem", margin: "0" }}>Wind dir</p>
                <h2>{directions[Math.floor((weather.current.wind_deg / 22.5) + 0.5) % 16]}</h2>
              </div>
            </WeatherCard>
          </WeatherWrapper>
        </div>
      }
    </>
  )
}

export default UserLocation;