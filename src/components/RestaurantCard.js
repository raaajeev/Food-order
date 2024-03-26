import { CDN_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {restaurantData} = props;
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla} = restaurantData?.info;
    return (
        <div className="m-4 p-4 w-[250px] bg-gray-100 hover:bg-gray-200 rounded-md">
            <img className="w-[100%] h-44 rounded-lg" alt="no-logo" src={CDN_IMG_URL+cloudinaryImageId} />
            <h3 className="font-bold py-4">{name}</h3>
            <h4 className="pb-2">{cuisines.join(", ")}</h4>
            <h4>{avgRating+ " Rating"}</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.slaString}</h4>
        </div>
    );
};

// Higher Order Component - Is a function which will take a Component as param and returns a Component

export const withRatedLabel = (RestaurantCard) =>{
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white p-2 m-4 rounded-md">Highly Rated</label>
                <RestaurantCard {...props}/>
            </div>
        );
    }
}

export default RestaurantCard;