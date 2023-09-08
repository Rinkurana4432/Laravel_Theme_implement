 import react from 'react';
 
//import styled from 'styled-components';
function Footer(){
	
	return(
  <div className="footer_section layout_padding">
    <div className="container">
    </div>
    <div className="footer_section_2">
      <div className="container">
        <h2 className="addres_text">Address</h2>
        <div className="row map_addres">
          <div className="col-sm-12 col-lg-4">
            <div className="map_text">
              <img src="images/map-icon.png" />
              <span className="map_icon">No.123 Chalingt Gates, Supermarket New York</span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="map_text">
              <img src="images/phone-icon.png" />
              <span className="map_icon">( +71 7986543234 )</span>
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="map_text">
              <img src="images/email-icon.png" />
              <span className="map_icon">demo@gmail.com</span>
            </div>
          </div>
        </div>
        <div className="social_icon">
          <ul>
            <li><a href="#"><img src="images/fb-icon.png" /></a></li>
            <li><a href="#"><img src="images/twitter-icon.png" /></a></li>
            <li><a href="#"><img src="images/in-icon.png" /></a></li>
            <li><a href="#"><img src="images/instagram-icon.png" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>


	  	  		  );
}
export default Footer;