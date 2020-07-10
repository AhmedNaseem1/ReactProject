import React, { Component } from 'react';
import './style.css'
import axios from 'axios'
class Footer extends Component{
    state = {
        tempreaturee: '',
        icon:'',
        humidity: '',
        wind_speed: '',
        feelslike: '',
    }
    componentDidMount(){
      axios.get('http://api.weatherstack.com/current?access_key=9704ce21ca1619fc5e5aa1a04065f198&query=Saudi%20Arabia&fbclid=IwAR3N3RpHEO51klekwOIi-tTP9B3gTHbBOjHc4L_EfHR_vVxxc5_Ln1g5iss')
      .then(res =>{
         this.setState({
             tempreaturee:res.data.current.temperature,
             icon:res.data.current.weather_icons,
             humidity:res.data.current.humidity,
             wind_speed:res.data.current.wind_speed,
             feelslike:res.data.current.feelslike
         })
      })
    }
    render(){
    return(
        <div className="footer">
            <div className="container">
            <div className="weather">
                <div className="name-weather-pre">
                    <div className="name">
                       <i className="fa fa-map-pin"></i>
                       <h4>الرياض</h4>
                    </div>  
                    <div className="weather-per">
                        <span className="temp">{this.state.tempreaturee}</span>
                        <i class="fas fa-circle circle"></i>
                    </div>
                </div>
                    <div className="weather-icon">
                      <img src={this.state.icon} className="cloud"/>
                    </div>
                    <div className="weather-info">
                        <div className="first">
                            <h6>Humidity</h6>
                            <span className="humidity">{this.state.humidity}</span>
                        </div>
                       <div className="second">
                           <h6>Wind Speed</h6>
                            <span className="wind_speed">{this.state.wind_speed}</span>
                       </div>
                        <div className="third">
                            <h6>Feels Like</h6>
                            <span className="feelslike">{this.state.feelslike}</span>
                        </div>
                    </div>
                </div>
                <div className="all-footer">
                <div className="contact-us">
                    <h5>تواصل معنا</h5>
                    <i className="fa fa-facebook"></i>
                    <i className="fa fa-twitter"></i>
                    <i className="fa fa-youtube"></i>
                    <i className="fa fa-instagram"></i>
                </div>
                <div className="list1">
                    <ul>
                        <li>رحلات سفاري</li>
                        <li>حج وعمره</li>
                        <li>حجز طيران</li>
                    </ul>
                </div>
                <div className="list2">
                    <ul>
                        <li>فنادق</li>
                        <li>معالم اثريه</li>
                        <li>رحلات جويه</li>
                    </ul>
                </div>
                <div className="logo">
                    <img src="images/logo.png"/>
                </div>
                </div>
            <div>
        </div>
     </div>
    </div>
    )
    }
     
}

export default Footer
