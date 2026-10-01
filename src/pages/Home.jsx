import { useState } from "react"
import LocationModal from "../components/LocationModal";

export default function Home() {
    const [click,setClick] = useState(false);
    
  return (
   <div>
    <div>
      <h1 className="font-bold text-6xl text-blue-300">NextLevel <span className="text-blue-400">Weather</span></h1>
      
      <p className="text-gray-300  text-xl py-3">Check your weather in your nextLevel</p>
     
      <button 
      onClick={()=>setClick(true)}
      type='button' 
      className='font-bold text-2xl p-4 hover:scale-105 transition-colors items-center bg-blue-500  rounded-2xl text-center'>check weather</button>
    </div>
    {
        click&&<LocationModal onClose = {()=>setClick(false)} />
    }
   </div>
  )
}
