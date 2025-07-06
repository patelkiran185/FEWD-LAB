import React, { useState } from "react";

export default function Quiz(){
    const [answer,setAnswer]=useState("");
    const [result,setResult]= useState("");
    const crct="React";
    const handleSubmit = () =>{
        if(answer.trim().toLowerCase()===crct.toLowerCase()){
            setResult("Correct");
        }else{
            setResult("Wrng");
        }
    }
    return(
        <div>
            <p> waht is js library  </p>
            <input  type = "text" onChange={(e)=>{
                setAnswer(e.target.value)
            }} value={answer} />
            <button  type = "submit " onClick={handleSubmit} >Submit </button> 
                {result && <p>{result}</p>}
        </div>
    );
}