import React, {useContext} from 'react';
import {FaBars} from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';
import { useMyGlobalContext } from './context';
import Sidebar from './Sidebar.js';

function Home(){
   const globalData = useMyGlobalContext();
   console.log("Global Data : ", globalData);
   const {showModal, showSidebar, hideSidebar} = globalData;

    return(
        <div style={{position:"relative"}}>
            <div className='upperContainer'>
                
                <Sidebar />
                <button className='menuBtn btn btn-primary' onClick={showSidebar} ><FaBars /></button>
            </div>
           
           
            <div className="modalParent">
                <button onClick={showModal} className='btn btn-warning'> Action </button>
                {/* <button><FaTimes /></button> */}
            </div>
            
        </div >
    )
}

export default Home;