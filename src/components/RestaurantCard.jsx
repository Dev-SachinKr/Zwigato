import { CDN_CLOUD_IMG } from "../utils/constants"

const RestaurantCard = (props) =>{ 

    const {resData} = props

    const {name, cuisines,cloudinaryImageId, avgRating} = resData.info

    const limitedCuisines = cuisines.slice(0,3)

    return(
        <div className="text-center pt-0.5 m-2 w-80 hover:bg-gray-600 rounded-xl justify-center">
            <div className="m-5 p-2">
                <img className=" w-70 h-50 rounded-2xl m-1" src={CDN_CLOUD_IMG + cloudinaryImageId} />
                <h3 className="font-extrabold  ">{name}</h3>
                <h4> ⭐{avgRating} . ⌚ {resData.info.sla.deliveryTime+" min"}</h4>
                <h4>{limitedCuisines.join(", ")}</h4>
            </div>
        </div>
    )
}


export const OfferCard = (RestaurantCard) => {
    return (props) => {
        const {header,subHeader} = props?.resData?.info?.aggregatedDiscountInfoV3
        return (
            <div>
                <label className="absolute mx-10 mt-7 my-4 p-1 font-extrabold text-white bg-black rounded-lg">
                    {header}{" "}{subHeader}
                </label>
                <RestaurantCard {...props} />
            </div>
        )
    }
}



export default RestaurantCard


