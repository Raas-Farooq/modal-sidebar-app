// import React,{useRef, useState, useEffect} from 'react';
import Sidebar from './Sidebar'
import Modal from './Modal.js';


function App() {
  console.log("App.js Running")
  return (
    <div className='AppRoot'>
      {/* <Modal> 
        
      </Modal> */}
      <Sidebar />
    </div>
  )
}

export default App;

