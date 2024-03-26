import { useState } from "react"
import ItemsList from "./ItemsList"

const RestaurantCategory = ({ data }) => {

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }
    
    return (
        <div className="w-1/2 mx-auto my-4 bg-gray-50 p-4 shadow-lg">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>&#11167;</span>
            </div>
            {
                showItems && <ItemsList items={data.itemCards} />
            }
            
        </div>
    )
}

export default RestaurantCategory