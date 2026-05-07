import React from 'react';
import category from '../data/category';

function Category(){
    return(
        <div className="container-fluid" id="whychoose">
            <div className="whychoose-container">
          <div className="heading">
             <h1>
            Roles We Offer
           </h1>
           <p>
            Flexible workforce solutions tailored to meet your business demands.
           </p>
          </div>

           <div className="container">
            <div className="row">
                 {category.map((item, idx) =>(
                    <div className="col-lg-4 category-card p-0" key={idx}>
                             <div className="category-content p-2">
                                 <div className="category-card-top">
                                <img src={item.image} alt="" className='img-fluid' />
                              </div>
                              <div className="category-card-bottom">
                                <p className='m-0'>{item.title}</p>
                              </div>
                             </div>
                    </div>
                 ))}
           </div>
           </div>
           </div>
        </div>
    )
}

export default Category;