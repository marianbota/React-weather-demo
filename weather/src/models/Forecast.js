class Forecast {
    constructor(jsonData) {
        this.country = jsonData?.country ?? "";
        this.city = jsonData?.name ?? "";
        this.condition = jsonData?.weather[0].description ?? "";
        this.min = jsonData?.main.temp_min ?? "";
        this.max = jsonData?.main.temp_max ?? "";
        this.feel = jsonData?.main.feels_like ?? "";
        this.windSpeed = jsonData?.wind.speed ?? "";
        this.visibility = jsonData?.visibility ?? "";
    }
}

export default Forecast;
