import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Link} from 'react-router-dom'

AOS.init({})

function AboutUs(){
    return(
        <div className="about-us" id="about-us">
            <h3 className="welcome-text"  data-aos="zoom-in-up">
            Welcome To Jahangiri Associates
            </h3>
            <p className="about-us-text" data-aos="zoom-in-up">
            Jahangiri Associates deals in all sort of property matters such as sale, purchase, construction, hiring for rent, commercial as well as residential properties in Defence Housing Authority ( DHA ), Bahria Town, and all approved <span>&amp;</span> well developed Societies of Rawalpindi and Islamabad. Our motto is to provide best and trustworthy services to our customers
            </p>
            {/* <Link to="/about-us" className="about-us-button" data-aos="zoom-in-up">
                Know More
            </Link> */}
            <button className="button about-us-button " type="button" data-aos="fade-up" style={{borderRadius:'35px',  backgroundColor:'darkgoldenrod'}}>
                <a href='/about-us' style={{textDecoration:'none', color:'white'}}>Know More</a>
                </button>
        </div>
    )
}

export default AboutUs;