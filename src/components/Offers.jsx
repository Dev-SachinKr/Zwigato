 import {Link, useParams} from 'react-router-dom'
import { SWIGGY_RESTAURANT_API } from '../utils/constants'
import RestaurantCard, { OfferCard } from './RestaurantCard'
import {useState, useEffect} from 'react'

const Offers = ()=>{

    const [resData, setResData] = useState([])

    const CardWithOffer = OfferCard(RestaurantCard)

    useEffect(()=>{
        const fetchData = async ()=> {
            const data = await fetch(SWIGGY_RESTAURANT_API)
            const json = await data.json()
            setResData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            // console.log(json)
        }

        fetchData()
        
    },[])
    return (
        <div className="flex flex-wrap m-10 p-7">
            {/* this card will add offer label to the existing restaurant card */}
            {
                resData.map(res => res?.info?.aggregatedDiscountInfoV3? <Link key={res?.info?.id} to={"/city/delhi/"+res.info.id}><CardWithOffer  resData = {res} /></Link>: null)
            }  
        </div>
    )
}

export default Offers