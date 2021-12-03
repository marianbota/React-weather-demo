 const WeatherService = {
    GetForecast: function GetForecast(city) {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        //NOTE these should not be hardcoded here
        const appKey = '66ff3434ba88fffc04bf3e1812207117';
        const url = 'https://api.openweathermap.org/data/2.5/weather';

        return fetch(`${url}?q=${city}&appid=${appKey}`, requestOptions)
            .then(response => response.json());
    }
}

 export default WeatherService;
