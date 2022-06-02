import { useState } from 'react';
import { FaSearchLocation} from 'react-icons/fa';
import background from './images/Clear.png';

const mainProperties = {
    backgroundUrl: background,
    temperatute: "15",
    condition: "",
    date: "",
    currentLocation : ""
}
// console.log(mainProperties.backgroundUrl)





const Main = (props) =>{

    //props.weather


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
                    <img src={mainProperties.backgroundUrl} alt="hahah" />
                </div>
                <h3 className="temperature">
                    {props.temp}<span><sup>o</sup>C</span>
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

            </main>

        </>



    )
}

// export weather

export default Main