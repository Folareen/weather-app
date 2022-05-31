// import './App.css';
// import React from 'react';
import './css/index.css';
import Main from './Main';
import Highlights from './Highlights';

// (async () => {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=lagos&units=metric&appid=b8b011d30d5cf438733113076fb03920");
//   const res = await response.json()
//   console.log(res)
  
// }

// )()


function App() {
  return (
    <>
      <Main/>
      <Highlights />
    </>
  );
}

export default App;
