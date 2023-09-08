 import react from 'react';
//import {Link} from 'react-router-dom';
//import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect, Link
} from "react-router-dom";


							
function Header(){
	
	const openNav = ()=>{
		 document.getElementById("myNav").style.width = "100%";
	};
	const closeNav = ()=>{
		 document.getElementById("myNav").style.width = "0%";
	};
	return(
	
	 <div className="header_section">
         <div className="container">
            <div className="row">
               <div className="col-md-3">
                  <div className="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
               </div>
               <div className="col-md-9">
                  <div className="menu_text">
					
                    <ul>
					
                        <li><a href="/">HOME</a></li>
                        <li><a href="about">ABOUT</a></li>
                        <li><a href="Ourservice">SERVICES</a></li>
                        <li><a href="project">PROJECTS</a></li>
                        <li><a href="Contact">CONTACT US</a></li>
                        <li><a href="clients">CLIENTS</a></li>
                        <li><a href="#"><img src="images/search-icon.png"/></a></li>
						
                        <div id="myNav" className="overlay">
                           <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>&times;</a>
                           <div className="overlay-content">
                              <a href="/">HOME</a>
                              <a href="about">ABOUT</a>
                              <a href="Ourservice">SERVICES</a>
                              <a href="project">PROJECTS</a>
                              <a href="Contact">CONTACT US</a>
                              <a href="clients">CLIENTS</a>
                           </div>
                        </div>
                        <span  onClick={openNav}><img src="images/toggle.png" className="toggle_menu" /></span>
					</ul>
                  </div>
                  
               </div>
            </div>
         </div>
      </div>
			
);
}
export default Header;	