import configData from "../config.json"

const WeatherService = {
    GetForecast: function GetForecast(city) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const appKey = configData.WeatherService.appKey;
        const url = configData.WeatherService.url;

        return fetch(`${url}?q=${city}&appid=${appKey}`, requestOptions)
            .then(response => response.json());
    }
}

 export default WeatherService;
