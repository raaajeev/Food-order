import { useState } from "react"

const User = (props) => {
    const [count, setCount] = useState(1);
    const [count1, setCount1] = useState(10);
  return (
    <div className="m-4 p-4 border border-solid border-b-black w-56">
        <h2>Count : {count}</h2>
        <h2>Count : {count1}</h2>
        <button className="px-4 bg-green-400" onClick={()=>{
            setCount(count+1);
            setCount1(count1+10);
        }}>Count Incrementer</button>
        <h2>Name : {props.name}</h2>
        <h3>Location : {props.location}</h3>
    </div>
  )
}

export default User