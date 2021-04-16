import React, {useEffect} from 'react'
import './style.css'
import {
    Grid,
} from '@material-ui/core';
import Carousel from "react-multi-carousel";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "react-multi-carousel/lib/styles.css";
import Axios from 'axios'
import {CircularProgress} from '@material-ui/core';

AOS.init({})

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

function HomeForRent(){

    const [showMore, setShowMore] = React.useState(false)
    const [housesRent, setHouses] = React.useState([])
    useEffect(()=>{
        Axios.get(process.env.REACT_APP_API_URL+`/house?status=rent&active=true`)
        .then(house => {
            setHouses(house.data.data)})
        .catch(err => console.log(err.message))
    },[])
    return(
        <div className="HomeForSale">
            {/* <h3 className="HoC-header">Home For Rent</h3> */}
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="center" 
                spacing={5}
            >
                <Grid md={12} style={{display:'flex', flexDirection:'row', justifyContent:'center', marginBottom:'30px'}}>
                    <h3 className='main-sale' style={{color:'darkgoldenrod'  }}>Home For Rent</h3>
                </Grid>
                <Grid items md={12} xs={12} data-aos="zoom-in">
                    
                <Carousel
 

                    additionalTransfrom={0}
                    arrows
                    autoPlaySpeed={3000}
                    centerMode={false}
                    className="itemCarousel"
                    containerClass="container-with-dots"
                    dotListClass=""
                    draggable
                    focusOnSelect={false}
                    infinite
                    itemClass=""
                    keyBoardControl
                    minimumTouchDrag={80}
                    renderButtonGroupOutside={false}
                    renderDotsOutside={false}
                    responsive={responsive}
                    showDots={false}
                    sliderClass=""
                    slidesToSlide={1}
                    swipeable
                    >

                        {
                             housesRent.length ?(
                                housesRent.map( house => (
                                    <div className="HomeCard">
                                   
                                        <img 
                                            src={house.property.images[0]} 
                                            alt="homeCard"
                                            className="homeCard-img"
                                        />
                                        <h4>{house.property.title}</h4>
                                        <p>{house.property.more_info}</p>
                                        <a href="/">View More</a>
                                    </div>
                                ))
                             ): <div><h4 className="sale-rent-text" >No Property for Rent at the moment</h4></div>
                        }
                </Carousel>
                </Grid>
                <Grid items md={12}>
                    <button className="button CoH-button " type="button" data-aos="fade-up" style={{borderRadius:'35px', border:'2px solid darkgoldenrod', backgroundColor:'darkgoldenrod', left: '50%',transform: 'translateX(-50%)',position: 'relative'}}>
                        <a  href="/properties" style={{color:'white', textDecoration:'none'}}>Show More</a>
                    </button>
                </Grid>
            </Grid>
        </div>
    )
}


export default HomeForRent;