import React, {useState, useEffect} from 'react'
import RestaurantCard from './RestaurantCard'
const Cart = () => {

  const [newResData, setNewResData] = useState([])

  useEffect(()=>{

    const fetchData = async()=>{
      const resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
      const jsonData = await resData.json()

      setNewResData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        // console.log(jsonData);
    }

    fetchData()
  },[])

  return (
    <div className=" flex flex-wrap  justify-center"  >
      {
        newResData.map(restaurant => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
      }
    </div>
  )
}

export default Cart