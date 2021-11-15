import WeatherService from "../services/OpenWeatherMapService";
import Forecast from "../models/Forecast";

let forecast = new Forecast();
//NOTE city name should be taken as a ui input
WeatherService.GetForecast('Sibiu')
    .then( result => {
        forecast = new Forecast(result)
        return forecast;
    })
    .then( cast => console.dir(cast))
    .catch( error => console.error(error) );


function WeatherScreen() {

    return (
        <>
            <h3>Weather report</h3>
            <p>Country code and City goes here</p>
            <p>General condition goes here</p>
            <p>Min: </p>
            <p>Max: </p>
            <p>Feels like: </p>
            <p>Wind speed: </p>
            <p>Visibility: </p>
        </>
    );
}

//NOTE don't forget to export the function component so it can be imported in another file
export default WeatherScreen;
