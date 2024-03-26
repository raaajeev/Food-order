import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const onlineStatus = useOnlineStatus();

    return (
        <div className="m-2 flex justify-between border border-b-black bg-gray-300 shadow-lg">
            <div className="p-4">
                <img className="w-20 rounded-md" alt="no-image" src={LOGO_URL} />
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status :  {onlineStatus ? <span>&#9989;</span> : <span>&#10060;</span>}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart">Cart</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;