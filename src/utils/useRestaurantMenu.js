import { useEffect, useState } from "react"
import { RESTAURANT_URL } from "../utils/constants";

const useRestaurantMenu = (resId) => {

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchRestaurantMenu();
    }, []);

    const fetchRestaurantMenu = async () => {
        const menuData = await fetch(RESTAURANT_URL+resId);
        const json = await menuData.json();
        setResInfo(json.data);
    };

  return resInfo
}

export default useRestaurantMenu