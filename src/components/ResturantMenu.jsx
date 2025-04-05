import React, { useState } from "react"
import {useParams} from "react-router-dom"
import ShimmerUI from "./ShimmerUI"
import { useResturantMenu } from "../utils/customHook"
import RestaurantCategory from "./RestaurantCategory"

const ResturantMenu = ()=>{


    const {resId} = useParams()
    
    const resMenu = useResturantMenu(resId)
    
    const [showIndex, setShowIndex] = useState(null)
    
    
    if(!resMenu) {
        return <ShimmerUI/>
    }

    // console.log(resMenu)
    // const cards = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

    // const itemCards = cards[3]?.card?.card?.info ?? cards[4]?.card.card.info || []
    // console.log(itemCards)   


     const itemCategory = resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(category => category?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    //  console.log(itemCategory)
     


    
    return(
        <div className="">
            <div className="text-center m-5">
                <h1 className="text-5xl font-extrabold m-4">{resMenu?.data?.cards[0]?.card?.card.text}</h1>

                <h2 className="text-4xl font-bold"> Menu Items</h2>
            </div>
            <div>
                <div >
                    {itemCategory.map((category, index) => <RestaurantCategory key = {category.card.card.title}
                     categoryData = {category.card.card} 
                     showItem = {index == showIndex ? true : false}
                     setShowIndex={()=> setShowIndex(index)}
                     />)}
                </div>
            </div>
            
        </div>
    )
}

export default ResturantMenu