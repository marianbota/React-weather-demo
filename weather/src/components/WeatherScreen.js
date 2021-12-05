import WeatherService from "../services/OpenWeatherMapService";
import Forecast from "../models/Forecast";
import { useState, useEffect, useRef } from "react";

//NOTE initialCity is a prop
function WeatherScreen({initialCity}) {
    useEffect(()=>{
        //NOTE this effect is executed on page load
        updateForecast();
    }, 
    //NOTE the square brackets indicate that the efect function will be called only once when the component is mounted
    [])

    const cityNameRef = useRef();

    //NOTE when the state changes the whole component is redended a again
    //NOTE object destructuring example
    let [state, setState] = useState({
        forecastData: new Forecast()
    });

    function updateForecast() {
        WeatherService.GetForecast(cityNameRef.current.value)
            .then( result => {
                let forecast = new Forecast(result)
                setState({...state, forecastData: forecast})
            })
            .then( cast => console.dir(cast))
            .catch( error => console.error(error) );            
    }

    return (
        <div className="border p-3 me-3 mb-3">
            <input defaultValue={initialCity} ref={cityNameRef}/>
            <button onClick={updateForecast}>Update</button>
            <ul className="mt-2">
                <li>{state.forecastData.country} {state.forecastData.city} {state.forecastData.condition}</li>
                <li>Min: {state.forecastData.min}</li>
                <li>Max: {state.forecastData.max}</li>
                <li>Feels like: {state.forecastData.feel}</li>
                <li>Wind speed: {state.forecastData.windSpeed}</li>
                <li>Visibility: {state.forecastData.visibility}</li>
            </ul>
        </div>
    );
}

//NOTE don't forget to export the function component so it can be imported in another file
export default WeatherScreen;
