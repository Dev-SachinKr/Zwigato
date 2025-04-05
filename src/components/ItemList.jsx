
import { CDN_CLOUD_IMG } from "../utils/constants"


const ItemList = (props)=>{
    const {name, defaultPrice, imageId, description, price} = props?.itemInfo
    // const price = props.itemInfo    
    // console.log(props)
    const limitedDescription = description?.slice(0,200)
    return(
        <div className=" w-full flex justify-between items-center m-2 p-5 align-middle h-42 border-b-2">
            <div className="w-9/12 p-1">
                <p className="text-lg font-bold text-gray-300">{name} {"-  Rs. "} { defaultPrice/100 || price/100}</p>
                <p className=" break-words text-gray-400 text-start">{limitedDescription}</p>
            </div>
            <div className="w-3/12 ">
                <div className="absolute">
                    <button className="bg-green-200 text-black px-4 p-2 font-bold mx-15 my-29 rounded-xl cursor-pointer">Add +</button>
                </div>
                {imageId ? (<img className="p-2 rounded-2xl w-40 h-40" src={CDN_CLOUD_IMG+imageId} alt="food Image" />) : (
                    <div className="w-full h-30 bg-gray-800" />
                )}
            </div>
        </div>
    )
}

export default ItemList