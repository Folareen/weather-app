import { FaSearchLocation, FaSearch} from 'react-icons/fa';
import background from './images/Clear.png';

const mainProperties = {
    backgroundUrl: background,
    temperatute: "15",
    condition: "",
    date: "",
    currentLocation : ""
}
// console.log(mainProperties.backgroundUrl)


// (async () => {
//   const response = await fetch("https://api.openweathermap.org/data/2.5/forecast?q=lagos&units=metric&appid=b8b011d30d5cf438733113076fb03920");
//   const res = await response.json()
//   console.log(res)
  
// }

// )()

const Main = () =>{
    return(
        <main className="main">
            <div className="search">
                <button>
                    Search For Places
                </button>
                <button className="location-btn">
                    <FaSearchLocation />
                </button>
            </div>
            <div className="condition-img">
                <img src={mainProperties.backgroundUrl} alt="hahah" />
            </div>
            <h3 className="temperature">
                15<span><sup>o</sup>C</span>
            </h3>
            <h5 className="condition">
                Shower
            </h5>
            <p className="date">
                Fri 5, jun
            </p>
            <p className="location">
                <FaSearchLocation/>
                Lagos
            </p>

            <div className="main--search">
                <button className="close">
                    X
                </button>
                <div className="search-box">
                    <FaSearch className="search-icon"  />
                    <input type="search" name="" id="" placeholder="search location..." />
                    <button type="submit" > Search</button>
                </div>
            </div>



        </main>
    )
}

export default Main