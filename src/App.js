// import './App.css';
// import React from 'react';
import './css/index.css';
import Main from './Main';
import Highlights from './Highlights';
import {FaSearch} from 'react-icons/fa';
import { useState } from 'react';




function App() {
  let currentLocation = "Lagos"

  const [query, setQuery] = useState( currentLocation)
  const [weather, setWeather] = useState({});

  const searchWeather = () =>{

    (async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=b8b011d30d5cf438733113076fb03920`);
      const res = await response.json();
      setWeather(res);
    })()

  };

  let data = "heyy";

  // console.log(weather.list.weather.main)

  // console.log(weather.list !== undefined ? weather.list.main : "weather condition" )

  console.log(weather.list !== undefined ? weather["list"][0]["weather"][0]["main"] : "weather condition" )
  console.log(weather.list !== undefined ? weather["list"][0]["main"]["temp"] : "0")

  return (
    <>
        <div className="main--search">
        <button className="close" onClick={() => document.querySelector('.main--search').classList.remove('open-search')} >
            {/* {weather} */}
            X
        </button>
        <div className="search-box">
            <FaSearch className="search-icon"  />
            <input type="search" name="" id="" placeholder="search location..." className="locationSearch" onChange={ e => setQuery(e.target.value)}/>
            <button type="submit" onClick={searchWeather} > Search</button>
        </div>
      </div> 

      <Main temp = {weather.list !== undefined ? Math.ceil(weather["list"][0]["main"]["temp"])  : "0"}  />
      <Highlights />

      {/* {
        (weather["list"]!== undefined) ? ( 
          <>
          <Main  />
          <Highlights weather = {weather["list"]!== undefined ? weather["list"][0]["weather"][0]["main"] : "weather condition" } />)
          </>
        ) : ("")
      } */}
    </>
  );
}

export default App;
