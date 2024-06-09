import React,{useRef, useState, useEffect, useLayoutEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import windowSize from './windowSize.js';
import {myLinks, socialLinks} from './myLinks.js';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";


function Navbar(){
    const secondList = useRef(null);
    const navbarRef = useRef(null);
    const menuButton = useRef(null);
    const [showNav, setShowNav] = useState(false);
    const size = windowSize();
    
    useLayoutEffect(() => {

      const socialWidth = secondList.current.getBoundingClientRect().width;
      navbarRef.current.style.width = socialWidth;
      console.log("navbar widht effect: ", navbarRef.current.getBoundingClientRect().width);
        
    },[])

    const topMenu = useRef(null);

  return (
    <div className='parentContainer'>
       <button className={showNav ? 'hideBtn': 'menuBtn'} ref={menuButton} onClick={(e) => {
        console.log("menu bar Clicked")
       setShowNav(!showNav);

       }}> <FaBars />
              {/* <i className="bi bi-list" style={{ cursor:"pointer", fontSize: '1.5rem',background:"lightblue"}}> </i> */}
        </button>
        <div className='mainContainer'>
        
          <div id="myNavbar" className={showNav ? 'showNavbar' : 'hideNavbar'} ref={navbarRef}>
          
            <div className="navbarHeader">
          
              <h3> Happy Coding </h3>
              
              <button onClick={() => setShowNav(!showNav)}> <IoMdClose />
              <i className="bi bi-clean" style={{ cursor:"pointer", fontSize: '1.5rem',background:"lightblue"}}></i>
              </button>
    
            </div>
            <div>
              <ul className="top" ref={topMenu}> 
                {myLinks.map(link => 
                  <li key={link.id}><Link to={'/' + link.url}> {link.text} </Link></li>
                )}
              </ul>
            </div>
            <div className='socialContainer'>
              <ul className="social" ref={secondList}> 
                {socialLinks.map(social => {
                  const {id, icon, url} = social;
                  return (
                    <li key={id}><a href={url} target='_blank'> {icon} </a> </li>
                  )
                })}
              </ul>
            </div>
            
          </div>
          <div className='mainContent'>
            <h2> How Much Can You Put Now</h2>
            <p>
              In the updated code, we check if topMenu.current is not null before accessing it or manipulating its classList. Additionally, we've moved the code that accesses topMenu.current inside the useEffect hook and added a dependency on size.width to ensure it runs whenever the window size chang
            </p>
            <img height="450px" width="100%" src="https://wallpapers.com/images/featured/nature-2ygv7ssy2k0lxlzu.jpg" ></img>
          </div>
        </div>
    </div>
    
  )

}

export default Navbar;