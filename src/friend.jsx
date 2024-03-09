import { useEffect, useState } from "react"
import Friend from "./friend2";

export default function Friends(){

    const [friends,setFriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data => setFriends(data));
    },[])
    return(
<div style={{border:"2px solid aqua",
        padding:"10px",
        margin:"15px"}}>
    <h1>Friend : {friends.length}</h1>
    {
        friends.map(friend => <Friend friend={friend}></Friend>)
    }
</div>
    )
}