 import react from 'react';
 
//import styled from 'styled-components';
function Clients(){
	
	return(
<div className="clients_section layout_padding">
         <div className="container">
            <h1 className="client_text"><strong>WHAT IS SAY CLIENTS</strong></h1>
            <p className="client_long_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum </p>
            <div className="clients_section_2">
               <div id="my_carousel" className="carousel slide" data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#my_carousel" data-slide-to="0" className="active"></li>
                     <li data-target="#my_carousel" data-slide-to="1"></li>
                     <li data-target="#my_carousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="row">
                           <div className="col-sm-12 col-lg-2">
                              <div className="client_img"><img src="images/client-img.png"/></div>
                              <h2 className="henrry_text">Henrry Jo</h2>
                           </div>
                           <div className="col-sm-12 col-lg-10">
                              <div className="img_5"><img src="images/img-6.png"/></div>
                              <p className="client_lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-12 col-lg-2">
                              <div className="client_img"><img src="images/client-img.png"/></div>
                              <h2 className="henrry_text">Henrry Jo</h2>
                           </div>
                           <div className="col-sm-12 col-lg-10">
                              <div className="img_5"><img src="images/img-6.png"/></div>
                              <p className="client_lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="row">
                           <div className="col-sm-12 col-lg-2">
                              <div classNameName="client_img"><img src="images/client-img.png"/></div>
                              <h2 classNameName="henrry_text">Henrry Jo</h2>
                           </div>
                           <div classNameNameName="col-sm-12 col-lg-10">
                              <div classNameNameName="img_5"><img src="images/img-6.png"/></div>
                              <p classNameNameName="client_lorem_text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
	  		  );}
export default Clients;