// import { data } from './Main';
import Nextweather from './Nextweather';
import Weatherhighlight from './Weatherhighlight';

const Highlights = (props) => {

    return(
        <section className="highlights">
            <div className="units">
                <span>
                    <sup>o</sup>C
                </span>
                <span>
                    <sup>o</sup>F
                </span>
            </div>
            <div className="next">
                <Nextweather nextWeatherData = {props.nextData} index = {1} />
                <Nextweather nextWeatherData = {props.nextData} index= {2} />
                <Nextweather nextWeatherData = {props.nextData} index = {3} />
                <Nextweather nextWeatherData = {props.nextData} index={4}/>
                <Nextweather nextWeatherData = {props.nextData} index= {5}/>
            </div>

            <h3>
                Today's Highlights
            </h3>
            <div className="weather-highlights">

                <Weatherhighlight highlightData = {props.weatherHighlightData}/>

            </div>

        </section>
    )
}

export default Highlights