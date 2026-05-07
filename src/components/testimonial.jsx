import React from "react";

function Testimonial(){
    return(
       <div id="carouselExampleSlidesOnly" class="carousel slide container" data-bs-ride="carousel">
        <h1 className="mt-4 mb-4">What People Say</h1>
  <div className="container">
    <div class="carousel-inner">
    <div class="carousel-item active">
     <h5>Michael Thompson</h5>
     <p>Operations Manager – Apex Manufacturing Ltd.</p>
     
      <div className="carousel-review">
        <img src="./src/assets/images/right.png" alt="" className="img-fluid" />
       <p>We’ve worked with several staffing agencies before, but the quality of workers provided here truly stands out. The manpower supplied was reliable, skilled, and ready to work from day one. It made a huge difference in our daily operations.</p>
     </div>
      <div className="google-review">
            <img src="./src/assets/images/google.png" alt="" className="img-fluid" />
            ⭐⭐⭐⭐⭐
        </div>
    </div>
    <div class="carousel-item">
      <h5>Sarah Patel</h5>
      <p>Logistics Supervisor – WestLine Logistics Inc.</p>
      
       <div className="carousel-review">
        <img src="./src/assets/images/right.png" alt="" className="img-fluid" />
        <p>The team consistently delivers dependable and hardworking staff whenever we need them. Every worker sent to our site was well-prepared and professional. It’s clear they take the time to match the right people with the right roles.</p>
       
     </div>
      <div className="google-review">
            <img src="./src/assets/images/google.png" alt="" className="img-fluid" />
            ⭐⭐⭐⭐
        </div>
    </div>
    <div class="carousel-item">
      <h5>David Chen</h5>
     <p> Warehouse Manager – Pacific Storage & Distribution</p>
     <div className="carousel-review">
        <img src="./src/assets/images/right.png" alt="" className="img-fluid" />
        <p>Excellent service from start to finish. The manpower provided exceeded our expectations in both productivity and attitude. We’ve seen a noticeable improvement in efficiency since partnering with them.</p>
       
     </div>
      <div className="google-review">
            <img src="./src/assets/images/google.png" alt="" className="img-fluid" />
            ⭐⭐⭐⭐⭐
        </div>
    </div>
  </div>
  </div>
</div>
    )
}

export default Testimonial;