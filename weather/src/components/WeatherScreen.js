import WeatherService from "../services/OpenWeatherMapService";
import Forecast from "../models/Forecast";
import { useState, useEffect } from "react";

function WeatherScreen() {
    useEffect(()=>{
        //NOTE this effect is executed on page load
        updateForecast();
    }, 
    //NOTE the square brackets indicate that the efect function will be called only once when the component is mounted
    [])

    let [state, setState] = useState({
        forecastData: new Forecast(),
        cityName: 'Sibiu'
    });

    function updateForecast() {
        //NOTE city name should be taken as a ui input
        WeatherService.GetForecast(state.cityName)
            .then( result => {
                let forecast = new Forecast(result)
                setState({...state, forecastData: forecast})
            })
            .then( cast => console.dir(cast))
            .catch( error => console.error(error) );            
    }

    function updateCity(event) {
        setState({...state, cityName: event.target.value})
    }

    return (
        <>
            <h3>Weather report</h3>
            <input defaultValue={state.forecastData.city} onBlur={updateCity}/>
            <button onClick={updateForecast}>Update</button>
            <p>{state.forecastData.country} {state.forecastData.city} {state.forecastData.condition}</p>
            <p>Min: {state.forecastData.min}</p>
            <p>Max: {state.forecastData.max}</p>
            <p>Feels like: {state.forecastData.feel}</p>
            <p>Wind speed: {state.forecastData.windSpeed}</p>
            <p>Visibility: {state.forecastData.visibility}</p>
        </>
    );
}

//NOTE don't forget to export the function component so it can be imported in another file
export default WeatherScreen;