import React from "react";
import { Link } from "react-router-dom";

function Patience(){

    return(
        <>
            <video
            width="600px"
            controls
            > <source src="https://youtu.be/0eP4K1iI6VA" ></source></video>

            <div>
                <p>
                With this change, the height of the navbarRef element should be set correctly when the topMenu links are shown or hidden.
                </p>
            </div>
            <div>
                <Link to="/">HOME</Link>
            </div>
        </>
    )
}

export default Patience;