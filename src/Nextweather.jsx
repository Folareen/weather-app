import background from './images/Clear.png';
import { displayDate } from './App';

import Clear from './images/Clear.png';
import Hail from './images/Hail.png';
import HeavyCloud from './images/HeavyCloud.png';
import HeavyRain from './images/HeavyRain.png';
import LightCloud from './images/LightCloud.png';
import LightRain from './images/LightRain.png';
import Shower from './images/Shower.png';
import Sleet from './images/Sleet.png';
import Snow from './images/Snow.png';
import Thunderstorm from './images/Thunderstorm.png';

const Nextweather = (props) => {

  const isNotEmpty = () => {
    return props.nextWeatherData.length > 1
  }

  if (isNotEmpty()){
    console.log(props.nextWeatherData[props.index - 1]["weather"][0]["description"])
  }

  function getImage(){
    if(isNotEmpty()){
            switch (props.nextWeatherData[props.index - 1]["weather"][0]["description"]){
          case "clear sky" :
              return Clear;
              break;
          case "broken clouds":
              return LightCloud;
              break;
          case "few clouds" :
              return LightCloud;
              break;
          case "light cloud" :
              return LightCloud;
              break;
          case "broken clouds" :
              return LightCloud;
              break;
          case "scattered clouds"  :
              return LightCloud;
              break;
          case "overcast clouds"  :
              return LightCloud;
              break;
          case "heavy clouds":
              return HeavyCloud;
              break;
          case "heavy rain":
              return HeavyRain;
              break;
          case "light rain":
              return LightRain;
              break;
          case "shower":
              return Shower;
              break;
          case "sleet":
              return Sleet;
              break;
          case "snow":
              return Snow;
              break;
          case "thunderstorm":
              return Thunderstorm;
              break;
          case "hail":
              return Hail;
              break;
          default:
            return "";
      }
    }
  }

    // console.log(props.nextWeatherData)
    // console.log("from nextWeather component")
    // console.log(props.index)
    // console.log( isNotEmpty() ? (props.nextWeatherData[props.index]["main"]["temp"]) : ("") )

    // 
    // (props.nextWeatherData[props.index]["main"]["temp"]) : (props.nextWeatherData[(props.index) -2]["main"]["temp"]) 

  return (
    <div className="next__weather">
        <h5 className="next-date">
            {displayDate(props.index)}
        </h5>
        <img src={getImage()} alt="" className="next-img" />
        <div className="next-temperature">
            { isNotEmpty() ? (props.nextWeatherData[props.index - 1]["main"]["temp"]) : ("") }<sup>o</sup>C
        </div>
    </div>
  )
}

export default Nextweather