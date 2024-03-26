import RestaurantCard, { withRatedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_LIST } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [restaurantsList, setRestaurantsList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    const RestaurantCardRated = withRatedLabel(RestaurantCard);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () =>{
        const apiData = await fetch(RESTAURANTS_LIST);
        const json = await apiData.json();
        setRestaurantsList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return (
            <div className="p-4 m-4">
                <h1>
                    Looks like you're offline!! Please check your Internet Connection
                </h1>
            </div>
        );
    }

    return restaurantsList.length === 0 ? <Shimmer /> : (
        <div className="m-2">
            <div className="flex">
                <div className="m-4 p-4">
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    }} />
                    <button className="px-4 bg-green-400 mx-4 rounded-md" onClick={()=>{
                        const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.name.trim().toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredList(filteredRestaurantsList);
                    }}>Search</button>
                </div>
                <div className="m-4 p-4">
                    <button className="px-4 py-1 bg-gray-400 rounded-md" onClick={()=>{
                        const filteredRestaurantsList = restaurantsList.filter(restaurant => restaurant.info.avgRating > 4);
                        setFilteredList(filteredRestaurantsList);
                    }}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
                {
                    filteredList?.map(restaurant => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id} style={{ textDecoration: 'none', color:'black' }}>
                        {
                            restaurant.info.avgRating > 4 ? <RestaurantCardRated restaurantData={restaurant} /> : <RestaurantCard restaurantData={restaurant} /> 
                        }
                    </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Body;