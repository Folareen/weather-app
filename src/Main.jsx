import { FaSearchLocation} from 'react-icons/fa';
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

// const mainProperties = {
//     backgroundUrl: clear,
//     temperatute: "15",
//     condition: "",
//     date: "",
//     currentLocation : ""
// }
// console.log(mainProperties.backgroundUrl)





const Main = (props) =>{

    //props.weather
    // const [background, setBackground] = useState("")

    console.log(props.condition)

    function getImage(){
        switch (props.condition){
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


    return(
        <>
            <main className="main">
                <div className="search">
                    <button onClick={() => document.querySelector('.main--search').classList.add('open-search')}>
                        Search For Places
                    </button>
                    <button className="location-btn" onClick={() => document.querySelector('.main--search').classList.add('open-search')} >
                        <FaSearchLocation />
                    </button>
                </div>
                <div className="condition-img">
                    <img src={getImage()} />
                </div>
                <h3 className="temperature">
                    {props.temp}<span><sup>o</sup>C</span>
                </h3>
                <h5 className="condition">
                    {props.condition}
                </h5>
                <p className="date">
                    {displayDate(0)}
                </p>
                <p className="location">
                    {props.location}
                </p>

            </main>

        </>



    )
}

// export weather

export default Main