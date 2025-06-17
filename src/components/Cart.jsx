import React from 'react'
import { CDN_CLOUD_IMG } from "../utils/constants"
import { useSelector } from 'react-redux'
import ErrorComponent from './ErrorComponent'

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items)
  const CDN_CLOUD_IMG = "https://your-cdn-url.com/" // Replace this with your actual CDN URL

  try {
    return (
      <div className='text-center m-5 p-5'>
        <h1 className='text-4xl font-bold mb-8 text-gray-800'>Cart-item List</h1>
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div key={item.itemInfo.id} className="w-full flex justify-between items-center m-2 p-5 align-middle h-auto border-b-2">
              {/* Left Section: Item Details */}
              <div className="w-9/12 p-1">
                <p className="text-lg font-bold text-gray-300">
                  {item.itemInfo.name} - Rs. {item.itemInfo.defaultPrice / 100 || item.itemInfo.price / 100}
                </p>
                <p className="break-words text-gray-400 text-start">
                  {item.itemInfo.description}
                </p>
              </div>

            
              <div className="w-3/12 relative">
                
                {item.itemInfo.imageId ? (
                  <img
                    className="p-2 rounded-2xl w-40 h-40 object-cover"
                    src={CDN_CLOUD_IMG + item.itemInfo.imageId} // Using CDN_CLOUD_IMG + imageId here
                    alt="food Image"
                  />
                ) : (
                  <div className="w-full h-30 bg-gray-800" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  } catch {
    return <ErrorComponent />
  }
}

export default Cart
