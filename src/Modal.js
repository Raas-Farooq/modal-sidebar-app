import {useState, useEffect, useContext} from 'react';
import './App.css';
import {FaTimes} from 'react-icons/fa';
import { appContext } from './context';
import { render } from '@testing-library/react';


function Modal(){
    const allData = useContext(appContext);

    const {modalRender, closingModal} = allData;



    console.log(" renderModal", modalRender);
    console.log(" closingModal", closingModal);
    return(
        <div className={modalRender ? 'showModal':'modalParent'}>
            <div className="myModal">
                <h2 style={{marginTop:"25px"}}> Happy On YOur EFFORT</h2>
                <div >
                    {modalRender && <button onClick={closingModal} style={{height:"30px", color:"black"}}> <FaTimes /> </button> }
                    
                </div>
            </div>
        </div>
    )
}

export default Modal