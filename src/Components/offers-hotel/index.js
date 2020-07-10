import React from 'react';
import './hotels.css'

const OffersHotel = () =>{
    return(
        <div className="offserhotel">
            <div className="container">
                <h4>عروض الفنادق</h4>
                <div className="cards-all">
                <div class="card card1">
                <span className="first-price">8500 ريال</span>
                <img src="images/hotel1.jpg" class="card-img-top one" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">فندق هاليتون - مكه</h5>
                    <p class="card-text"> 9 ايام 2 ليالي</p>
                </div>
                </div>
                <div class="card card2">
                <span className="second-price">8500 ريال</span>
                <img src="images/hotel2.jpg" class="card-img-top one" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">فندق المايوت - المدينه</h5>
                    <p class="card-text">9 ايام 2 ليالي</p>
                </div>
                </div>
                <div class="card card3">
                <span className="third-price">8500 ريال</span>
                <img src="images/hotel3.jpg" class="card-img-top one" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">فندق معرفش - الرياض</h5>
                    <p class="card-text">9 ايام 2 ليالي.</p>
                </div>
                </div>
            </div>
            <div className="ads">
                <div className="ads-1">
                    <h5>مساحه اعلانيه</h5>
                    <img src="images/desert.jpg"/>
                </div>
                <div className="ads-2">
                    <h5>مساحه اعلانيه</h5>
                    <img src="images/dubia.jpg"/>
                </div>
            </div>
        </div>
    </div>
    )
}

export default OffersHotel