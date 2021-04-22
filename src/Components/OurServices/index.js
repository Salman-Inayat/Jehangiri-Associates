import React from 'react'
import './style.css'
import AOS from 'aos';
import {Grid} from '@material-ui/core'
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


AOS.init({})
function OurServices(){
 return(
    <div className="Our-Services">
        <div className='services-title' data-aos="fade-up">
            <h4>Our Services</h4>
            <p data-aos="zoom-in-up">Everything you need at your finger tips</p>
        </div>
        <div className="services">
        <Grid container spacing={12}>
            <Grid items md={3} xs={12}>
            <div className="service" data-aos="fade-up">
            <FontAwesomeIcon icon={faCoffee} />
                <h4>Fully Responsive</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl massa, interdum non mi nec, molestie ullamcorper mauris.</p>
                <a href="/services">View more</a>
            </div>
            </Grid>
            <Grid items md={3} xs={12}>
            <div className="service" data-aos="fade-up">
                <h4>Admin Panel</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl massa, interdum non mi nec, molestie ullamcorper mauris.</p>
                <a href="/services">View more</a>
            </div>
            </Grid>
            <Grid items md={3} xs={12}>
            <div className="service" data-aos="fade-up">
                <h4>Compare Properties</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl massa, interdum non mi nec, molestie ullamcorper mauris.</p>
                <a href="/services">View more</a>
            </div>
            </Grid>

            <Grid items md={3} xs={12}>
            <div className="service" data-aos="fade-up">
                <h4>Compare Properties</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nisl massa, interdum non mi nec, molestie ullamcorper mauris.</p>
                <a href="/services">View more</a>
            </div>
            </Grid>
        </Grid> 
        </div>
    </div>
 )   
}

export default OurServices;