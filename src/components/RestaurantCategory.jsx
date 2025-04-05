import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = (props)=>{
    const {title, itemCards} = props?.categoryData
    const {showItem, setShowIndex} = props
    // console.log(props.categoryData.card.title)

    // const [showItem, setShowItem] = useState(false)

    const handleClick = ()=>{
        setShowIndex()
    }

    return(
        <div className="bg-gray-800 w-6/12 mx-auto my-4 p-2 rounded-xl text-gray-100 justify-between shadow-blue-500">
            {/* Header */}
            <div className="w-full flex justify-between font-bold text-xl m-1 p-2 cursor-pointer "  onClick={()=> {handleClick()}}>
                <h2>{title} ({title.length})</h2>
                 <p className="text-2xl">{"🔽"}</p>
            </div>
            {/* items with details */}
            <div>
                { showItem && itemCards.map(item => <ItemList key={item.card.info.id} itemInfo={item.card.info} />)}
            </div>
            
        </div>
    )
}

export default RestaurantCategory