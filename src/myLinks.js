import React from 'react';
import {FaBehance, FaTwitch, FaYoutube, FaLinkedin, FaWhatsapp, FaTwitter} from 'react-icons/fa';


const myLinks = [
    {
      id:0,
      text:'Akhira',
      url:'hereafter'
    }, 
    {
      id:1, 
      text:'WorldLife',
      url:'World'
    }, 
    {
      id:2,
      text:'Action',
      url:'Act'
    }, 
    {
      id:3,
      text:'Patience',
      url:'Sabar'
    }
];

const socialLinks = [
  {
    id:0,
    icon:<FaBehance />,
    url:'https://www.benhance.com',
    
  }, 
  {
    id:1, 
    icon:<FaTwitter />,
    url:'https://www.twitter.com',
  }, 
  {
    id:2,
    icon:<FaTwitch />,
    url:'https://www.twitch.com',
  }, 
  {
    id:3,
    icon:<FaYoutube />,
    url:'https://www.youtube.com',
  }, 
  {
    id:4,
    icon:<FaWhatsapp />,
    url:'https://www.whatsapp.com',
  }
]

export {socialLinks, myLinks};