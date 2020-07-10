import React from 'react';
import './style.css'
const FirstBar = () =>{
    return(
    <div className="bar">
        <div className="container"> 
        <div className="all">
            <div className="icons-but">
                <div className="icons">
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-youtube"></i>
                </div>
                <div className="buttons">
                    <button className="btn btn-warning">تسجيل جديد</button>
                    <button className="btn btn-warning">تسجيل الدخول</button>
                </div>
            </div>
            <div className="contactus ">
                <i className="fa fa-envelope"></i>
                <p>test@gmail.com</p>
                <i className="fa fa-phone"></i>
                <p>+900 15 20 30 50</p>
            </div>
        </div>
    </div>
    </div>
    )
}

export default FirstBar