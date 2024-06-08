import React from "react";
import { Link } from "react-router-dom";


function Akhira(){

    return(
        <>
            <h1> The Real Destination </h1>

            <div>
                <h3 style={{textAlign:"center",background:"gold"}}>Youm E TagaBun</h3>
            </div>
            <div>
                <Link to="/">HOME</Link>
            </div>
        </>
    )
}

export default Akhira;