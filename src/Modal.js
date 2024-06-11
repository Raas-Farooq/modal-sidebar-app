import {useState, useEffect} from 'react';
import './App.css';
import {FaBaby} from 'react-icons/fa';

function Modal(){
    const [display, setDisplay] = useState(false);
    console.log("MOdal isIndeed Running")
    return(
        <div className='modalParent'>
            <div className="myModal">
                <h2> Happy On YOur EFFORT</h2>
                <div className={display? 'showModal':'hideModal'}>
                    {display? <button onClick={() => setDisplay(!display)} style={{height:"30px", color:"black"}}> Close </button> :
                     <button onClick={() => setDisplay(!display)}> Action</button>
                     }
                   
                </div>
            </div>
        </div>
    )
}

export default Modal