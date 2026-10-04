import { useLocation } from "react-router";
import { getWeather } from "../service/get-weather";
import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";

export default function Weather() {
  const value = useLocation();
  const place = value.state.location;
  const [weather, setWeather] = useState(null);
  // console.log(place)

  useEffect(() => {
    if (!place) {
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
        <div className="grid md:grid-cols-2 gap-5">
          <div className="space-y-3">
 <div className="shadow-2xl rounded-2xl p-5">
            <div className="space-y-3">
              <h1 className="text-2xl text-blue-500 font-semibold ">
                Today's Weather Details
              </h1>
              <div className="flex items-center gap-3">
                <MapPin size={30} />
                <h2 className="text-4xl text-purple-500 font-semibold">
                  {place.name}
                </h2>
              </div>
              <div className="flex justify-between items-center gap-16">
                <h3 className="text-6xl text-purple-900 font-extrabold">
                  {weather?.temperature}
                </h3>
                <p className="text-4xl text-purple-800 font-extrabold">
                  {weather?.description}
                </p>
              </div>
              <div className="flex items-center justify-between gap-5">
                <div className="rounded-2xl text-center  shadow-2xl p-4">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Feels Like
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.feelsLike}
                  </p>
                </div>
               
               {/* Humidity */}
                <div className="rounded-2xl text-center  shadow-2xl p-4">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Humidity
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.humidity}
                  </p>
                </div>
                <div className="rounded-2xl text-center  shadow-2xl p-4">
                  <h3 className="text-lg text-purple-900 font-bold">
                    Wind Speed
                  </h3>
                  <p className="text-4xl text-purple-800 font-extrabold">
                    {weather?.windSpeed}
                  </p>
                </div>
               
              </div>
            </div>
          </div>
           <div className="shadow-2xl rounded-2xl p-5">
            <h2 className="text-4xl text-purple-500 font-semibold">
                  Smart Recommandations
                </h2>
                <div>
                  
                </div>
           </div>
          </div>
         
         {/* another */}
<div className="shadow-2xl flex flex-col justify-between items-center rounded-2xl p-5 ">

  <div>
    <h2 className="text-xl text-blue-950 font-bold">
      Live in {place.name}
    </h2>
  </div>

  <div className="flex justify-center items-center gap-3">
    <p className="text-4xl text-purple-800 font-extrabold">
      {weather?.description}
    </p>
  </div>
   <div className="flex justify-center items-center gap-3">
    <span className="rounded-full font-medium text-lg border-2 p-2 border-purple-400 ">Feel's Like: {weather?.feelsLike}</span>
  </div>

</div>


        </div>
      </div>
    </div>
  );
}
