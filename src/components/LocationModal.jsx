import { X } from 'lucide-react';

export default function LocationModal({onClose}) {
  return (
    <div className="fixed inset-0 flex justify-center items-center  bg-gray-950/60">
      <div className="h-[300px] w-[450px] bg-gray-100 shadow-2xl border-gray-200 rounded-2xl">
       <div className='flex justify-between items-center p-3'>
         <h1 className="">Where are you today?</h1>
        <button 
        onClick={onClose}
        className='cursor-pointer' ><X /> </button>
       </div>
    </div>
    </div>
  )
}
