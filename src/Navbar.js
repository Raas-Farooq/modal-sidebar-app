import React,{useRef, useState, useEffect, useLayoutEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import windowSize from './windowSize.js';
import myLinks from './myLinks.js';

function Navbar(){
    const secondList = useRef(null);
    const navbarRef = useRef(null);
    const size = windowSize();
    
    useLayoutEffect(() => {

        if(topMenu.current && size.width >= 600){
            
            topMenu.current.classList.remove('toggleMenu');
            navbarRef.current.style.height = 'auto'; 
        }
        
    },[size.width])

    const topMenu = useRef(null);

    const handleMenuBtn = (e) => {
        e.preventDefault();

        topMenu.current.classList.toggle('toggleMenu');
        const navHeight = navbarRef.current.getBoundingClientRect().height;
        const topMenuHeight = topMenu.current.getBoundingClientRect().height;

        console.log("scrollHeight ", topMenuHeight);
        if(topMenuHeight > 50){
            navbarRef.current.style.height = topMenuHeight + navHeight +"px";
            console.log("navbarRef height: ", navbarRef.current.getBoundingClientRect().height)
        }
        else{
            navbarRef.current.style.height = 60+'px';
            console.log("navbar height < 50 ", navHeight)
      
        }   
    }
  return (
    <div>
        <div id="myNavbar" ref={navbarRef} style={{display:"flex", justifyContent:"space-between"}}>
   
          <div>
            <h3> Happy Coding </h3>
          </div>
          <div>
          <ul className="top" ref={topMenu}> 
            {myLinks.map(link => 
              <li key={link.id}><a target="_blank" href={link.url}>{link.text}</a></li>
            )}
            </ul>
          </div>
          <div>
            <ul className="high" ref={secondList}> 
              <li id="motto">Jaan</li>
              <li id="motto">Maal</li>
              <li id="motto">Namaz</li>
              <li id="motto">Taqwa</li>
            </ul>
          </div>
          <button className="menuBtn" onClick={handleMenuBtn}> 
           <i className="bi bi-list" style={{ cursor:"pointer", fontSize: '1.5rem',background:"lightblue"}}></i>
          </button>
        
        </div>
        <div>
          <p>
            In the updated code, we check if topMenu.current is not null before accessing it or manipulating its classList. Additionally, we've moved the code that accesses topMenu.current inside the useEffect hook and added a dependency on size.width to ensure it runs whenever the window size chang
          </p>
          <img height="450px" width="100%" src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" ></img>
        </div>
    </div>
  )

}

export default Navbar;