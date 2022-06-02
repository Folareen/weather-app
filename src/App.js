// import './App.css';
// import React from 'react';
import './css/index.css';
import Main from './Main';
import Highlights from './Highlights';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';

export function displayDate(day){
  const DAYS = [
    "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"
  ];
  const MONTH = [
    "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
  ];
  const currDate = new Date().getDate();
  const currDay = new Date().getDay();
  const actualDay = (currDay + day) > 6 ? (currDate + day) -5 : currDay + day
  const month = new Date().getMonth();

  return `${DAYS[actualDay]}, ${currDate + day} ${MONTH[month]}`
}


function App() {

  let currentLocation = "Lagos";

  // async function getLocation(){
  //   if (navigator.geolocation) {
  //       navigator.geolocation.getCurrentPosition(function(position){
  //         fetch(`http://api.positionstack.com/v1/reverse?access_key=93b6e5f543ee6a01143560cfa87c32b6&query=${position.coords.latitude},${position.coords.longitude}`)
  //           .then(data => data.json() )
  //           .then(res => currentLocation = res.data[0].region )
  //           .then(console.log("done"))
  //       })
  //   }
  //   else{
  //     alert("Pls, allow location")
  //   }
  // }

  const [query, setQuery] = useState(currentLocation);
  const [weather, setWeather] = useState({});

  let weatherData = [];

  function searchWeather () {

    (async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=b8b011d30d5cf438733113076fb03920`);
      const res = await response.json();
      setWeather(res);

    })()

  };

  if(weather["list"] !== undefined){
    for (let i = 0; i < 41 ; i+=7  ){
      weatherData.push(weather["list"][i])
      if(i == 40){
        weatherData.push(weather["list"][39])
      }
    }
  }

  const isNotEmpty = () => {
    return weatherData.length > 1
  }

  return (
    <>  
      {window.addEventListener('load', () => {
        searchWeather()
      })
    }

      <div className="main--search">
        <button className="close" onClick={() => document.querySelector('.main--search').classList.remove('open-search')} >
            X
        </button>
        <div className="search-box">
            <FaSearch className="search-icon"  />
            <input type="search" name="" id="" placeholder="search location..." className="locationSearch" onChange={ e => setQuery(e.target.value)}/>
            <button type="submit" onClick={searchWeather} > Search</button>
        </div>
      </div> 

      <Main temp = {isNotEmpty() ? Math.ceil(weatherData[0]["main"]["temp"])  : ""} condition = {isNotEmpty() ? weatherData[0]["weather"][0]["description"] : ""} location = {query} />
      <Highlights  nextData = {weatherData} weatherHighlightData = {weatherData[0]} />
    </>
  );
}

export default App;
