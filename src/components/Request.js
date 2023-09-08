 import react from 'react';
 
//import styled from 'styled-components';
function Request(){
	
	return(
<div className="contact_section">
         <div className="container-fluid">
            <div className="row">
               <div className="col-md-6">
                  <div className="contact_bg">
                     <div className="input_main">
                        <div className="container">
                           <h2 className="request_text">REQUEST A CALL BACK</h2>
                           <form action="/action_page.php">
                              <div className="form-group">
                                 <input type="text" className="email-bt" placeholder="Your Name" name="Name">
                              </div>
                              <div className="form-group">
                                 <input type="text" className="email-bt" placeholder="Email" name="Email">
                              </div>
                              <div className="form-group">
                                 <input type="text" className="email-bt" placeholder="Phone" name="Email">
                              </div>
                           <form action="/action_page.php">
                              <div className="form-group">
                                 <textarea className="massage-bt" placeholder="Massage" rows="5" id="comment" name="text"></textarea>
                              </div>
                           </form>
                           </form>
                        </div>
                     </div>
                     <div className="send_bt"><a href="#">SEND</a></div>
                  </div>
               </div>
               <div className="col-md-6 padding_0">
                  <div className="map-responsive">
                     <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width="600" height="450" frameborder="0" style="border:0; width: 100%;" allowfullscreen></iframe>
                  </div>
               </div>
            </div>
         </div>
      </div>
	  	  		  );}
export default Request;