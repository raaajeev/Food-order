import User from "./User";
import UserClass from "./UserClass";

const AboutUs = () => {
    return (
        <div className="m-4 p-4">
            <h1 className="font-bold">About Us</h1>
            <div className="flex">
                <User name={"Praveen Chandana Function"} location={"Hyderabad"} />
                <UserClass name={"Praveen Chandana Class"} location={"Ramachandrapuram"} />
            </div>
        </div>
    );
};

export default AboutUs;