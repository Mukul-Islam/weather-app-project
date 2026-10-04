const WMO_CODES = {
    0: {
        condition: "Clear sky",
        description:"clear",
        label:"clear_sky",
        icon:"clear"
       },
    1: {
        condition: "Mainly clear",
        description:"mainly_clear",
        label:"mainly_clear",
        icon:"mainly_clear"
       },
    2: {
        condition: "Partly cloudy",
        description:"partly_cloudy",
        label:"partly_cloudy",
        icon:"partly_cloudy"
       },
    3: {
        condition: "Overcast",
        description:"overcast",
        label:"overcast",
        icon:"overcast"
       },
    45: {
        condition: "Fog",
        description:"fog",
        label:"fog",
        icon:"fog"
       },
    48: {
        condition: "Depositing rime fog",
        description:"depositing_rime_fog",
        label:"depositing_rime_fog",
        icon:"depositing_rime_fog"
       },
    51: {
        condition: "Drizzle: Light",
        description:"drizzle_light",
        label:"drizzle_light",
        icon:"drizzle_light"
       },
    53: {
        condition: "Drizzle: Moderate",
        description:"drizzle_moderate",
        label:"drizzle_moderate",
        icon:"drizzle_moderate"
       },
    55: {
        condition: "Drizzle: Dense intensity",
        description:"drizzle_dense_intensity",
        label:"drizzle_dense_intensity",
        icon:"drizzle_dense_intensity"
       },
    56: {
        condition: "Freezing Drizzle: Light",
        description:"freezing_drizzle_light",
        label:"freezing_drizzle_light",
        icon:"freezing_drizzle_light"
       },
    57: {
        condition: "Freezing Drizzle: Dense intensity",
        description:"freezing_drizzle_dense_intensity",
        label:"freezing_drizzle_dense_intensity",
        icon:"freezing_drizzle_dense_intensity"
       },
    61: {
        condition: "Rain: Slight",
        description:"rain_slight",
        label:"rain_slight",
        icon:"rain_slight"
       },
    63: {
        condition: "Rain: Moderate",
        description:"rain_moderate",
        label:"rain_moderate",
        icon:"rain_moderate"
       },
    65: {
        condition: "Rain: Heavy intensity",
        description:"rain_heavy_intensity",
        label:"rain_heavy_intensity",
        icon:"rain_heavy_intensity"
       },
    66: {
        condition: "Freezing Rain: Light",
        description:"freezing_rain_light",
        label:"freezing_rain_light",
        icon:"freezing_rain_light"
       },
    67: {
        condition: "Freezing Rain: Heavy intensity",
        description:"freezing_rain_heavy_intensity",
        label:"freezing_rain_heavy_intensity",
        icon:"freezing_rain_heavy_intensity"
       },
    71: {
        condition: "Snow fall: Slight",
        description:"snow_fall_slight",
        label:"snow_fall_slight",
        icon:"snow_fall_slight"
       },
    73: {
        condition: "Snow fall: Moderate",
        description:"snow_fall_moderate",
        label:"snow_fall_moderate",
        icon:"snow_fall_moderate"
       },
    75: {
        condition: "Snow fall: Heavy intensity",
        description:"snow_fall_heavy_intensity",
        label:"snow_fall_heavy_intensity",
        icon:"snow_fall_heavy_intensity"
       },
    77: {
        condition: "Snow grains",
        description:"snow_grains",
        label:"snow_grains",
        icon:"snow_grains"
       },
    80: {
        condition: "Rain showers: Slight",
        description:"rain_showers_slight",
        label:"rain_showers_slight",
        icon:"rain_showers_slight"
       },
    81: {
        condition: "Rain showers: Moderate",
        description:"rain_showers_moderate",
        label:"rain_showers_moderate",
        icon:"rain_showers_moderate"
       },
    82: {
        condition: "Rain showers: Violent",
        description:"rain_showers_violent",
        label:"rain_showers_violent",
        icon:"rain_showers_violent"
       },
    85: {
        condition: "Snow showers: Slight",
        description:"snow_showers_slight",
        label:"snow_showers_slight",
        icon:"snow_showers_slight"
       },
    86: {
        condition: "Snow showers: Heavy",
        description:"snow_showers_heavy",
        label:"snow_showers_heavy",
        icon:"snow_showers_heavy"
       },
    95: {
        condition: "Thunderstorm: Slight or moderate",
        description:"thunderstorm_slight_or_moderate",
        label:"thunderstorm_slight_or_moderate",
        icon:"thunderstorm_slight_or_moderate"
       },
    96: {
        condition: "Thunderstorm with slight hail",
        description:"thunderstorm_with_slight_hail",
        label:"thunderstorm_with_slight_hail",
        icon:"thunderstorm_with_slight_hail"
       },
    99: {
        condition: "Thunderstorm with heavy hail",
        description:"thunderstorm_with_heavy_hail",
        label:"thunderstorm_with_heavy_hail",
        icon:"thunderstorm_with_heavy_hail"
       }
}


export const getWeather = async (place) =>{
    // console.log("function", place)
    const url = `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&current=temperature_2m,precipitation,rain,relative_humidity_2m,weather_code,wind_speed_10m`;
    const result = await fetch(url);
    // console.log(result)
    const data = await result.json();
    // console.log(data)
    const now = data.current;
    // console.log(data)
    if(!now)
    {
        throw new Error("Failed to fetch weather data")
    }

    const weather = WMO_CODES[now.weather_code];

    const icon = weather.icon === "clear" && now.is_day === 0 ? `${weather.icon}_night` : weather.icon;

    console.log(weather);
    return {
        location: place.name,
        temperature: Math.round(now.temperature_2m),
       humidity: now.relative_humidity_2m,
       windSpeed: now.wind_speed_10m,
       feelsLike: Math.round(now.apparent_temperature),
     condition: weather.condition,
     description: weather.description,
     label: weather.label,
     icon: icon
    }
}