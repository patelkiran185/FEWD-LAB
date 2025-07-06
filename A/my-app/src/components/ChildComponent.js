import React from "react";
function ChildComponent(props){

        return (
            <div>
                <h1> child</h1>
                <button onClick={props.onTrigger}>Call the parent </button>
            </div>
        );
    
}
export default ChildComponent;