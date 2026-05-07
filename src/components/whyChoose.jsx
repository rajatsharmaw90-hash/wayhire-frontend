import React from "react";

function WhyChoose(){
    return(
        <div className="container-fluid" id="whychoose">
           <div className="whychoose-container">
            <div className="heading">
                <h1>
                    WHY CUSTOMERS TRUST US
                </h1>
                <p>
                    We put your needs first, ensuring every service is handled with care, precision, and complete transparency.
                </p>

                <div className="row">
                   
                    <div className="col-lg-6 why-right-img">
                        <img src="./src/assets/images/hero-img2.png" alt="" className="img-fluid" />
                    </div>
                     <div className="col-lg-6">
                        <div className="why-left-content">
                            <h4>What makes us different</h4>
                            <ul><li>We help build cleaner, more consistent work habits.</li>
                             <li>We watch for waste in motion, waiting, and handeling.</li>
                              <li>We place workers for the operations not jus for headcounts.</li>
                                <li>We learn your workflow, pressure points, and daily output needs.</li>
                                <hr />

                                
                            </ul>

                            <div className="icon-section">
                                <img src="./src/assets/images/warehouse.svg" alt="" />
                                <img src="./src/assets/images/construction-safety.svg" alt="" />
                                <img src="./src/assets/images/time-management.svg" alt="" />
                                
                            </div>
                            <p>Labour support that improves flow, discipline, and execution.</p>
                        </div>
                    </div>             
                </div>
            </div>
           </div>
        </div>
    )
}

export default WhyChoose;