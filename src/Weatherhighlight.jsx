
const Weatherhighlight = (props) => {

    const isNotEmpty = () =>{
        return props.highlightData !== undefined
    }
    // console.log(props.highlightData)

    // const displayHighlightData = () => {
    //     if(props.title == "Wind status"){
    //         return props.highlightData.wind.speed
    //     }
    //     else if(props.title = "Humidity"){
    //         return props.highlightData.main.humidity
    //     }
    //     else if(props.title = "Visibility"){
    //         return props.highlightData.visibility
    //     }
    //     else if(props.title = "Air pressure"){
    //         return props.highlightData.main.pressure
    //     }else{
    //         return "error"
    //     }
    // }

  return (
    <>
        <div className="weather-highlight">
            <h5>
                Wind status
            </h5>
            <p className="value">
                {isNotEmpty() ? (props.highlightData.wind.speed) : ("")}<span>mph</span>
            </p>
            <div className="indicator">
                {/* some rand loll */}
            </div>
        </div>
        <div className="weather-highlight">
            <h5>
                Humidity
            </h5>
            <p className="value">
                {isNotEmpty() ? (props.highlightData.main.humidity) : ("")}<span>%</span>
            </p>
            <div className="indicator">
                {/* some rand loll */}
            </div>
        </div>
        <div className="weather-highlight">
            <h5>
                Visibility
            </h5>
            <p className="value">
                {isNotEmpty() ? Math.ceil(props.highlightData.visibility / 1609) : ("")}<span>miles</span>
            </p>
            <div className="indicator">
                {/* some rand loll */}
            </div>
        </div>
        <div className="weather-highlight">
            <h5>
                Air pressure
            </h5>
            <p className="value">
                {isNotEmpty() ? (props.highlightData.main.pressure) : ("")}<span>mb</span>
            </p>
            <div className="indicator">
                {/* some rand loll */}
            </div>
        </div>
    </>
  )
}

export default Weatherhighlight