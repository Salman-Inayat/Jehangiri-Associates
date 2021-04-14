import React from 'react'
import './style.css'
import {
    Grid,
} from '@material-ui/core';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


AOS.init({})

function ContactFromHome(){

    const [value, setValue] = React.useState({
        location: '',
        type: '',
        MinVal: '',
        MaxVal: '',
        // min
    });
    const handleChange = (event) =>{
        setValue(event.target.value)
    }

    return (
        <div className="contact-from-home" id="contact-from-home">
            <Grid container spacing={1} >
                <Grid items md={5} xs={12}>
                    <div className="contact-text" data-aos="fade-right">
                        <div>
                        <div>
                            Contact for 
                        </div>
                        <h4>
                            Home Here
                        </h4>
                        </div>
                    </div>
                </Grid>
                <Grid items md={7} xs={12}>
                <Grid 
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="flex-start"  
                    spacing={3} 
                    className="contact-home-box"
                    data-aos="fade-left"
                >
                    <Grid items md={6} xs={12}>
                        <input 
                            placeholder="Location" 
                            type="search" 
                            name="location"
                            value={value["location"]}
                            className="searchInput"
                        />
                    </Grid>
                    <Grid items md={6} xs={12}>
                    <select
                        value={value["type"]}
                        onChange={handleChange}
                        name="type"
                        placeholder="Type"
                        className="searchInput"
                        >
                        <option value="Rent" className="searchOption">Rent</option>
                        <option value="Buy" className="searchOption">Buy</option>
                        <option value="Sell" className="searchOption">Sell</option>
                    </select>
                    </Grid>
                    <Grid items md={6} xs={12}>
                        <input 
                            placeholder="Minimum Budget" 
                            type="number" 
                            className="searchInput"
                            value={value["MinVal"]}
                            onChange={handleChange} 
                        />
                    </Grid>
                    <Grid items md={6} xs={12}>
                        <input 
                            placeholder="Maximum Budget" 
                            type="number" 
                            value={value["MaxVal"]}
                            onChange={handleChange}
                            className="searchInput" 
                        />
                    </Grid>
                </Grid>
                <button href="/contactus" className="button CoH-button " type="button" data-aos="fade-up">
                    Contact Us
                </button>
                </Grid>
            </Grid>
        </div>
    )
}

export default ContactFromHome;