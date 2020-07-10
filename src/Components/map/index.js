import React from 'react';
import './style.css'
const TheMap = () =>{
    return(
        <div className="map">
            <div className="contact-us"><span className="contact"><span className="us">تواصل معنا</span></span></div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7286615.899145397!2d30.8768375!3d26.906099949999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2seg!4v1594275013029!5m2!1sar!2seg" width="600" height="450" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    )
}

export default TheMap