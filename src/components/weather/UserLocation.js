import React, { useState, useEffect } from 'react'
import IssInfoBox from '../natural-events/IssInfoBox'
import Navbar from './NavbarWeather'
import { WeatherH1, WeatherContainer, WeatherCard, WeatherCard1, WeatherWrapper, WeatherWrapper1 } from './WeatherElements'

var directions = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"]

const closest = (h, ts) => {
  var ob;
  for (let i = 0; i < 48; i++) {
    if (ts <= h[i].dt) {
      ob = h[i];
      break;
    }
  }
  return ob
}

const UserLocation = ({ location, timeStamp }) => {
  useEffect(() => {
    const fetchData = async () => {
      await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${location.latitude}&lon=${location.longitude}&units=metric&exclude=daily&appid=6d6b972a7fed81bbe74cfc6cab92c9be`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
        });
    }
    fetchData();
  }, [])

  const [weather, setWeather] = useState();
  //console.log(weather)
  useEffect(() => {
    if (weather) {
      var w = closest(weather.hourly, weather.current.dt)
      setWInfo(w)
    }
  }, [weather])

  const [winfo, setWInfo] = useState();

  //console.log(winfo)
  return (
    <>
      {weather && winfo &&
        <div className="user-weather">
          <WeatherWrapper1>
            <WeatherCard1>
              <div className="row">
                <div className="col-md-3 weather-temp">
                  <h1 style={{ fontSize: "3rem", margin: 0 }}>{weather.current.temp}<sup>o</sup>C , {winfo.weather[0].main} </h1>
                  <p style={{ fontSize: "1.3rem", margin: "0" }}>Mumbai , IN</p>
                  <img className="mainImg" src={`http://openweathermap.org/img/wn/${winfo.weather[0].icon}@4x.png`} alt="weather-img" />
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