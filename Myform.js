import { useState } from "react";
import React from "react";
function Myform(){

    const description ="This is a normal text area. Multiple content can be mentioned here.";

    const [mycar,setMyCar]=useState("Volvo");
    const handleChange=(event)=>{
        setMyCar(event.target.value);
    }

    return(
            <div className="area">
                <h2>DEMO Text Area and Select</h2>
                <form>
                    <br/>
                    <textarea value={description}/>
                    <br/>
                    <select value={mycar} onChange={handleChange}>
                        <option value="Ford">Ford</option>
                        <option value="Volvo">Volvo</option>
                        <option value="BMW">BMW</option>
                    </select>   
                    <br/><br/>
                </form>
            </div>
        );
    
}

export default Myform;