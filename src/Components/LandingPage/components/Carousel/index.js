import React from 'react';
import Carousel from 'react-material-ui-carousel'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid} from "@material-ui/core";

AOS.init({
    // // Global settings:
    // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    // initClassName: 'aos-init', // class applied after initialization
    // animatedClassName: 'aos-animate', // class applied on animation
    // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    // offset: 120, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    // duration: 400, // values from 0 to 3000, with step 50ms
    // easing: 'ease', // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
});

function LandingCarousel(props)
{
    var items = [
        {
            name: "Random #1",
            // desc: '',
            img: 'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg01.jpg'
        },
        {
            name: "Random #2",
            // desc: 'Welcome to Jahangiri Associates',
            img: 'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg02.jpg'
        }
    ]
 
    return (
        <Grid md={12}>
                <Carousel
                className="carousel" style={{width:'100vh'}}
                indicators = {false}
            >
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Grid>
        
    )
}
 
function Item(props)
{
    return (
        <div className="container">
            <img src={props.item.img} alt={props.item.name} className="carousel-img" />
            <div 
                data-aos="fade-up"
                className="carousel-title">
                <h3 className='welcome-text' style={{ color:'white', fontWeight:'200'}}>Welcome to </h3>
                <h1 className="main-title" >Jahangiri Associates</h1>
                {/* <br/> */}
                <div style={{padding:'',display:'flex', flexDirection:'row',justifyContent:'space-around', marginTop:'20px', fontSize:'25px'}}>
                    <h4 >Sale</h4>
                    <h4 >Purchase</h4>
                    <h4 >Rent</h4>
                </div>
                <h4 className="location" style={{fontSize:'23px', marginTop:'20px', letterSpacing:'2px'}}>in DHA, bahria and cda islamabad</h4>

            </div>
        </div>
    )
}

export default LandingCarousel;