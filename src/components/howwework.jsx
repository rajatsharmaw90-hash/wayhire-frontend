import React from "react";

function HowWeWork(){
    return(
        <div className="container-fluid">
              <div className="heading">
                <h1 className="mt-4">OUR APPROACH TO EVERY PROJECT</h1>
                <p>A practical start-up approach for new client engagement.</p>
              </div>
             <div className="container">
                 <div className="row" id="how-work-row">
                     <div className="col-lg-6" id="how-work-left">
                    <div className="how-work-content">
                        <img src="./src/assets/images/work-img1.png" alt="" className="img-fluid"/>
                         <h5>Understand the operations</h5>
                    <p>We learn the layout, pace, bottlenecks, safety expectations, and labour gaps.</p>
                    </div>
                </div>
                
               

               <div className="col-lg-6" id="how-work-left">
                <div className="how-work-content">
                    <img src="./src/assets/images/work-img2.png" alt="" className="img-fluid"/>
                    <h5>Match the right workforce</h5>
                    <p>We assign workers based on the job, shift patterns, and operational reality.</p>
                </div>
                </div>

                

                 <div className="col-lg-6" id="how-work-left">
                    <div className="how-work-content">
                        <img src="./src/assets/images/work-img3.png" alt="" className="img-fluid"/>
                    <h5>Support on Site</h5>
                    <p>On-site follow-up help with attendance, communication,standards, and quick problem solving.</p>
                    </div>
                </div>

                

                <div className="col-lg-6" id="how-work-left">
                    <div className="how-work-content">
                        <img src="./src/assets/images/work-img4.png" alt="" className="img-fluid"/>
                    <h5>Reduce waste over time</h5>
                    <p>we look for opportunities to improve 5S, motion, organization, and workflow discipline</p>
                    </div>
                </div>

           
                 

              </div>
             </div>
              
        </div>
    )
}

export default HowWeWork;