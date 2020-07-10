import React from 'react';
import './offers.css'

const Offers = () =>{
    return(
        <div className="offers">
                <h4>عروض سياحيه</h4>
            <div className="all-cards">
             <div class="card card-1">
            <img src="images/3rood.jpeg" class="card-img-top"/>
            <div class="card-body">
            <h5 class="card-title">8500 ريال</h5>
            <a href="#" class="btn btn-primary">اطلب الان</a>
            </div>
            </div>
            <div class="card card-2">
            <img src="images/3rood2.jpg" class="card-img-top"/>
            <div class="card-body">
            <h5 class="card-title">8500 ريال</h5>
            <a href="#" class="btn btn-primary">اطلب الان</a>
            </div>
            </div>
            <div class="card card-3">
            <img src="images/3rood3.jpg" class="card-img-top"/>
            <div class="card-body">
            <h5 class="card-title">8500 ريال</h5>
            <a href="#" class="btn btn-primary">اطلب الان</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Offers