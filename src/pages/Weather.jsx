import { useLocation } from "react-router"
import { getWeather } from "../service/get-weather";
import { useEffect, useState } from "react";

export default function Weather() {
    const value  = useLocation();
    const place = value.state.location
    const [weather,setWeather] = useState(null);
    // console.log(place)
    
    useEffect(() => {
      if(!place){
        return;
      }
      const fetchWeather = async () => {
      try { 
            const result = await getWeather(place);
            // console.log("Weather data:", result);
            setWeather(result);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
      };
        fetchWeather();
      }, [place]);
      
    return (
        <div>
            <div>
              
            </div>
        </div>
    )
}
