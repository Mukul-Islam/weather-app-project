import { X } from "lucide-react";
import { useState } from "react";
import { getgeolocation } from "../service/get-geolocation";
import { useNavigate } from "react-router";

export default function LocationModal({ onClose }) {
  const navigate = useNavigate();
  const [city, setCity] = useState("");
  const [error, setError] = useState();
  const gotoPage = (location) => {
    navigate("/weather", { state: { location } });
  };

  const eventHandler = async (e) => {
    e.preventDefault();

    const value = city.trim();
    if(!value){
       setError("Enter name your city")
       return 
    }

    try {
      const location = await getgeolocation(value);
      //   console.log(result);
      if (!location) {
        setError("this is not gonna work api");
      }
      gotoPage(location);
    } catch (error) {
      setError(error);
    }
  };

  //   function
  const handleGeoLocation = () => {
    if(!navigator.geolocation){
        setError("GEO location not found");
        return
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        gotoPage({ name: "your name", lat: latitude, lon: longitude });
      },
      (error) => {
        setError(error.message);
      },
      () => {
        setTimeout;
      },
    );
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center  bg-gray-950/60">
      <div className="h-[300px] w-[450px] bg-gray-100 shadow-2xl border-gray-200 rounded-2xl">
        <div className="flex justify-between items-center p-4">
          <h1 className="font-semibold text-xl">Where are you today?</h1>
          <button onClick={onClose} className="cursor-pointer">
            <X />{" "}
          </button>
        </div>

        {/* form submission */}
        <div className="px-4 ">
          <form onSubmit={eventHandler} className="space-y-5">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Enter city name"
              className="border rounded-sm p-1 w-full"
            />
            <button
              type="submit"
              className="w-full font-semibold text-xl p-2 hover:scale-105 transition-colors items-center bg-blue-500  rounded-2xl text-center"
            >
              Get Weather
            </button>
          </form>
          <div>Or</div>
          <div>
            <button
              onClick={() => handleGeoLocation()}
              type="submit"
              className="w-full font-semibold text-xl p-2 hover:scale-105 transition-colors items-center bg-blue-500  rounded-2xl text-center"
            >
              Use My Location
            </button>
          </div>
          
        </div>
        {
            error && <p className="font-bold text-red-700">{error}</p>
          }
      </div>
    </div>
  );
}
