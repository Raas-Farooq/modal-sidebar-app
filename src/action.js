import React from "react";
import { Link } from "react-router-dom";


function Action(){

    return(
        <>
            <h1> ACTION </h1>
            <img src="https://www.shutterstock.com/image-photo/wooden-blocks-words-take-action-260nw-2248057497.jpg" height="500px" />

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

export default Action;