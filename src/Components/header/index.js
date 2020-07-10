import React, { Component } from 'react';
import './style.css'
class Header  extends Component{
    render(){
          return(
        <div className="header">
            <div className="overlay"></div>
            <div className="icons">
                <div className="one">
                 <i className="fa fa-shopping-bag"></i>
                <p>عروض سياحيه</p>
                </div>
               <div className="two">
                    <i class="fa fa-umbrella"></i>
                <p>رحلات سياحيه</p>
               </div>
               <div className="three">
                <i class="fa fa-car"></i>
                 <p>مواصلات</p>
               </div>
               <div className="four">
                <i class="fa fa-hotel"></i>
                <p>فنادق</p>
               </div>
               <div className="five">
                <i class="fa fa-plane"></i>
                 <p>الطياران</p>
               </div>  
            </div>
        </div>
    )
    }
}

export default Header