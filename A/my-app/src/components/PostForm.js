import React,{useState} from "react";
import axios from "axios";
function PostForm(){
    const [title,setTite]=useState("");
    const handlesubmit = (e) =>{
            e.preventDefault();
            axios.get(
                "https://jsonplaceholder.typicode.com/posts",{
                    title:title,
                    body:"smaple",
                    userId:1
                }
            ).then( (res)=>{
                console.log(res.data);
                alert("data snet ");
            }

            ).catch((error)=>{console.error(error)});
    }
    return (
        <div>
            <form onSubmit={handlesubmit} > 
                <input  type="text" value={title} onChange={(e)=>{
                    setTite(e.target.value)
                }}/>
                <button type="submit"> Click me</button>
            </form>
        </div>
    );
}

export default PostForm;