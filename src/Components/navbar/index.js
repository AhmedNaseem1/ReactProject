import React, { Component } from 'react';
import './style.css'

class Navbar extends Component{
    render(){
    return(
        <div className="Nav">
            <div className="container">
            <div class="input-group">
                <div class="input-group-prepend">
                <span class="input-group-text"><i className="fa fa-search"></i></span>
                </div>
                <input type="text" class="input" placeholder="بحث" dir="rtl"/>
                <button className="btn btn-warning">ابحث من هنا</button>
            </div>
            <div className="bars">
                <i className="fa fa-bars"></i>
            </div>
            <div className="Navbar">
                <nav>
                    <ul>
                        <li><a href="#">رحلات سياحيه</a></li>
                        <li><a href="#">عروض سياحيه</a></li>
                        <li><a href="#">مواصلات</a></li>
                        <li><a href="#">الفنادق</a></li>
                        <li><a href="#">الطيران</a></li>
                    </ul>
                </nav>
                <div className="logo">
                    <img src="images/logo.png" />
                </div>
            </div>
        </div>
        <div className="nav2">
        <nav>
            <ul>
                <li><a href="#">رحلات سياحيه</a></li>
                <li><a href="#">عروض سياحيه</a></li>
                <li><a href="#">مواصلات</a></li>
                <li><a href="#">الفنادق</a></li>
                <li><a href="#">الطيران</a></li>
            </ul>
        </nav>
        </div>
    </div>
    )
    } 
}

export default Navbar

