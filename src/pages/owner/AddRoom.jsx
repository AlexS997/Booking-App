import { useState } from "react"
import FeatureTitle from "../../components/FeatureTitle"
import { assets } from "../../assets/assets"

const AddRoom = () => {

  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null
  })

  const [input, setInput] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free WiFi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  })

  return (
    <form>
      <FeatureTitle align='left' 
        font='outfit' 
        title='Add Room' 
        subtitle='Fill the details, pricing and amenities, to enhance the user booking experience.'
      />

      <p className="text-gray-800 mt-10">
        Images
      </p>

      <div className="grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap">
        {Object.keys(images).map((index) => (
          <label htmlFor={`roomImage${index}`} key={index}>
            <img src={images[index] ? URL.createObjectURL(images[index]) : assets.uploadArea} 
              alt="uploadImg"
              className="max-h-13 cursor-pointer opacity-80"
            />
            <input type="file" accept="image/*" id={`roomImage${index}`} hidden
              onChange={e => setImages({...images, [index]: e.target.files[0]})}
            />
          </label>
        ))}
      </div>

      <div className="flex w-full max-sm:flex-col sm:gap-4 mt-4">
        <div className="flex-1 max-w-48">
          <p className="text-gray-800 mt-4">Room Type</p>
          <select value={input.roomType} 
            onChange={e => setInput({...input, roomType: e.target.value})}
            className="border opacity-70 border-gray-300 mt-1 rounded p-2 w-full"
          >
            <option value=''>Select Room Type</option>
            <option value='Single Bed'>Single Bed</option>
            <option value='Double Bed'>Double Bed</option>
            <option value='Luxury Room'>Luxury Room</option>
            <option value='Family Suite'>Family Suite</option>
          </select>
        </div>

        <div>
          <p className="mt-4 text-gray-800">
            Price <span className="text-sm">/night</span>
          </p>
          <input type="number" placeholder="0" className="border border-gray-300 mt-1 rounded p-2 w-24 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
            value={input.pricePerNight}
            onChange={e => setInput({...input, pricePerNight: e.target.value})}
          />
        </div>
      </div>

      <p className="text-gray-800 mt-4">Amenities</p>
      <div className=" flex flex-col flex-wrap mt-1 text-gray-400 max-w-sm">
        {Object.keys(input.amenities).map((val, index) => (
          <div key={index}>
            <input type="checkbox" id={`amenities${index+1}`} checked={input.amenities[val]} 
              onChange={() => setInput({...input, amenities: {...input.amenities, [val]: !input.amenities[val]}})}
            />
            <label htmlFor={`amenities${index+1}`}> {val}</label>
          </div>
        ))}
      </div>

      <button className="bg-primary text-white px-8 py-2 rounded mt-8 cursor-pointer">
        Add Room
      </button>
    </form>
  )
}

export default AddRoom