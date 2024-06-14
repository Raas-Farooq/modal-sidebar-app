import React, {useContext} from 'react';
import {FaBars} from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { appContext } from './context';
function Home(){
    const allData = useContext(appContext);
    const {showingSidebar, showingModal} = allData;

    // console.log("showingSidebar: ", showingModal);
    return(
        <div style={{position:"relative"}}>
            <div>
            <button className="menuBtn" onClick={showingSidebar} ><FaBars /></button>
            </div>
           
           
            <div className="modalParent">
                <button onClick={showingModal}> Action </button>
                {/* <button><FaTimes /></button> */}
            </div>
            
        </div >
    )
}

export default Home;