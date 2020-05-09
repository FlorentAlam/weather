import { WEATHER_API_KEY } from "./keys";

export const weatherApi = (lat, long) => {
    return `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${process.env.WEATHER_API_KEY || WEATHER_API_KEY}`
}