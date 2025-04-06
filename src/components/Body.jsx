import React, { useEffect,useState } from "react"
import RestaurantCard from "./RestaurantCard"
// import data from "../utils/mockData"
import ShimmerUI from "./ShimmerUI"
import { Link } from "react-router-dom"
import {  useOnlineStatus } from "../utils/customHook"
import { SWIGGY_RESTAURANT_API } from "../utils/constants"


const Body = () =>{
    const [OriginalResturantsData, setOriginalResturantsData] = useState([])
    const [resturantsData, setResturantData] = useState([])
    const [toggleTopRes, setToggleTopRes] = useState(false)

      // local variable for searching resturants
    const [searchText, setSearchText] = useState("")



    const onlineStatus = useOnlineStatus() 

        // //  useEffect
        useEffect(()=>{
            fetchData()
        },[])
        
        const fetchData = async () =>{
           

            {/* Cross-Origin Resource Sharing (CORS) proxy API using thingproxy - as rest not woking like corsproxy.io and all  */}

            const data = await fetch(SWIGGY_RESTAURANT_API)

            const jsonData = await data.json()

            // console.log(jsonData)
            
            setResturantData( jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants )
            setOriginalResturantsData(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            

        }


    // Shimmer UI with Conditional Rendering 
    if(!onlineStatus) {
        return (
        <h1 style ={{textAlign:"center"}}>
            Oops!.. your are Offline
        </h1>
        )
    }

    return OriginalResturantsData.length === 0 ? <ShimmerUI/> :(
        <div className="">
            <div className="flex justify-center space-x-50 text-xl m-10 " >
                <div className="search space-x-10">

                    <input className="w-80 border-0 border-b-2 border-gray-300 focus:outline-none focus:border-blue-950  transition duration-1000 ease-in-out p-2" type="text" placeholder="Search..."  value={searchText}  
                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}/>

                    <button className="bg-gray-600 p-3 rounded-2xl cursor-pointer" onClick={()=>{
                        console.log(searchText)
                        const filterResturants = OriginalResturantsData.filter((data)=>(
                            data.info.name.toLowerCase().includes(searchText.toLowerCase())
                        ))
                        setResturantData(filterResturants)
                    }} >Search</button>
                </div>
                <div>
                    <button className="bg-gray-600 p-3 rounded-2xl cursor-pointer" onClick={()=>{
                        if(toggleTopRes){
                            setResturantData(OriginalResturantsData)
                            setToggleTopRes(!toggleTopRes)
                        }
                        else{
                            const topResturants = resturantsData.filter(res => res.info.avgRating >= 4.5)
                            setResturantData(topResturants)
                            setToggleTopRes(!toggleTopRes) 
                        }
                    }}>
                        Top Resturants
                    </button>
                </div>
            </div>
            <div className=" flex flex-wrap m-10 p-7">
                {
                    resturantsData.map(restaurants => <Link to={"/city/delhi/"+restaurants.info.id} key ={restaurants.info.id} ><RestaurantCard key ={restaurants.info.id} resData = {restaurants}/></Link>)
                }
            </div>

        </div>
    )
}

export default Body