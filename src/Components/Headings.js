import React from "react";

export default function Headings(props) {
    console.log(props);
        return(
            <div>
                <h1> Weather Finder</h1>
                <form className="region" onSubmit ={(e) => props.changeLocation(e)} >
                    <input className="regioninput" placeholder="Enter Location" onChange={(e)=>
                         props.changeRegion(e.target.value)}/>

                </form>
            </div>
        )
    }

    // e = event