import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid, Card, CardActionArea,CardContent, CardMedia, Typography, Modal, Button} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faCalendar, faThumbsUp, faShippingFast,faChartLine, faCommentsDollar, faHandshake, faHandHolding, faBalanceScale } from '@fortawesome/free-solid-svg-icons'

AOS.init({})
function WhyUs(){
    return(
        <div className="why-us" >
            <h3 className="services-title" data-aos="fade-up">
            Why Us ?
            </h3>
           
            <Grid container spacing={5}  style={{padding:"20px", color:"white"}}>
                <Grid item md={4} sm={6} xs={12}>
                    <FontAwesomeIcon icon={faCommentsDollar} className="iconfont"/>
                    <h3 className='title' style={{textTransform:'none', letterSpacing:'2px'}}>Cost Effective </h3>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <FontAwesomeIcon icon={faCalendar} className="iconfont"/>
                    <h3 className='title' style={{textTransform:'none', letterSpacing:'2px'}}>Experienced</h3>
                </Grid>
                <Grid item md={4} sm={6} xs={12}>
                    <FontAwesomeIcon icon={faThumbsUp} className="iconfont"/>
                    <h3 className='title' style={{textTransform:'none', letterSpacing:'3px'}}>Reliable</h3>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <FontAwesomeIcon icon={faShippingFast} className="iconfont"/>
                    <h3 className='title' style={{textTransform:'none', letterSpacing:'2px'}}>Fast</h3>
                </Grid>
                <Grid item md={6} sm={6} xs={12}>
                    <FontAwesomeIcon icon={faHandHolding} className="iconfont"/>
                    <h3 className='title' style={{textTransform:'none', letterSpacing:'2px'}}>PEC, DHA Registered</h3>
                </Grid>
            </Grid>    
        </div>
    )
}

export default WhyUs;