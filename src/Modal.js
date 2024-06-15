import {useState, useEffect, useContext} from 'react';
import './App.css';
import {FaTimes} from 'react-icons/fa';
import { render } from '@testing-library/react';
import { useMyGlobalContext } from './context';

function Modal(){

    const {isSidebarThere, isModalThere,hideModal} = useMyGlobalContext();

    console.log("isSidebarThere Modal",isSidebarThere);
    return(
        <div className={'modalParent'}>
           <div className= {isModalThere? 'showModal':"myModal"}>
                
                <div  className={isModalThere && 'showBox'}>
                {isModalThere && <h2 style={{marginTop:"25px"}}> Effort </h2>}
                  {isModalThere && <button 
                  style={{height:"30px", color:"black"}} 
                  onClick={hideModal}
                 > <FaTimes /> </button> }
                    
                </div>
            </div>
        </div>
    )
}

export default Modal