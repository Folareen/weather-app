import background from './images/Clear.png';
import { displayDate } from './App';

const Nextweather = (props) => {

    const isNotEmpty = () => {
    return props.nextWeatherData.length > 1
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
        <img src={background} alt="" className="next-img" />
        <div className="next-temperature">
            { isNotEmpty() ? (props.nextWeatherData[props.index - 1]["main"]["temp"]) : ("") }<sup>o</sup>C
        </div>
    </div>
  )
}

export default Nextweather