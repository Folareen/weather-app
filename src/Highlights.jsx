import background from './images/Clear.png';

const Highlights = () => {
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
                <div className="next__weather">
                    <h5 className="next-date">
                        Tomorrow
                    </h5>
                    <img src={background} alt="" className="next-img" />
                    <div className="next-temperature">
                        <span>1<sup>o</sup>C</span>
                        <span> 2<sup>o</sup>C</span>
                    </div>
                </div>
                <div className="next__weather">
                    <h5 className="next-date">
                        Tomorrow
                    </h5>
                    <img src={background} alt="" className="next-img" />
                    <div className="next-temperature">
                        <span>1<sup>o</sup>C</span>
                        <span> 2<sup>o</sup>C</span>
                    </div>
                </div>
                <div className="next__weather">
                    <h5 className="next-date">
                        Tomorrow
                    </h5>
                    <img src={background} alt="" className="next-img" />
                    <div className="next-temperature">
                        <span>1<sup>o</sup>C</span>
                        <span> 2<sup>o</sup>C</span>
                    </div>
                </div>
            </div>

            <h3>
                Today's Highlights
            </h3>
            <div className="weather-highlights">

                <div className="weather-highlight">
                    <h5>
                        Wind Status
                    </h5>
                    <p className="value">
                        7<span>mph</span>
                    </p>
                    <div className="indicator">
                        {/* some rand loll */}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Highlights