import React from 'react';

function Quality(){
    return(
        <div className="container ">
            <h1 className='text-center mt-4'>Committed to Quality Work</h1>
            <p className='text-center'>Your team should recieve workers who understand standards, organization, and continous improvement.</p>
            <div className="row" id='quality-row'>
                <div className="col-lg-6" id='quality-content'>
                     <h3  id='quality'>Our Operating Approaches</h3>
                     <ul>
                        <li  id='quality'>Workers are introduced to 5S and workplace organizations.</li>
                        <li  id='quality'>We reinforce standard work, communication, and accountability.</li>
                        <p  id='quality'>We look for cleaner handoffs, better flow, and fewer delays. The goal is dependable labour with stronger executions.</p>
                     </ul>
                </div>
                <div className="col-lg-6" id='quality-img'>
                    <img src="./src/assets/images/quality.jpg" alt="" className='img-fluid'/>
                </div>
                  <div className="col-lg-6" id='quality-img'>
                    <img src="./src/assets/images/teamleads.jpg" alt="" className='img-fluid'/>
                </div>
                 <div className="col-lg-6" id='quality-content'>
                     <h3 id='quality'>Leadership and Credibility</h3>
                     <ul>
                        <li  id='quality'>Managers with years of hands-on experience in staffing and industrial operations.</li>
                        <li  id='quality'>A practical understanding of client expectations, worker performance, and floor discipline.</li>
                        <p  id='quality'> Opeartions & manangement background. knowledge of 5S and six sigma principles. Focused on site execution, communicatoion, and operational follow-through.</p> 
                     </ul>
                </div>
               
            </div>
        </div>
    )
}

export default Quality;