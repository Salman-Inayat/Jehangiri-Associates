import React, {useEffect} from 'react'
import './style.css'
import {
    Link
}from 'react-router-dom'
import {
    Breadcrumbs,
    Typography,
    Grid,
    Container,
    Chip ,
} from '@material-ui/core';
import Axios from 'axios'
const queryString = require('query-string');

function Properties(props){

    let cities = [ 'Karachi', 'Lahore', 'Faisalabad', 'Rawalpindi', 'Multan', 'Gujranwala', 'Peshawar', 'Abbottabad', 'Islamabad', 'Quetta', 'Sargodha']
    const [value, setValue] = React.useState({
        PropID: null,
        BoR: '',
        City: '',
        PropType: '',
        MinPr: null,
        MaxPr: null,
    })

    let query = queryString.parse(props.location.search, {
        parseNumbers: true,
        parseBooleans: true
    })

    const validate = ()=>{
        if(value['PropID'] === ''){
            return false
        }
        else
        return true
    }
    Object.prototype.isEmpty = function() {
        for(var key in this) {
            if(this.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    const [houses, setHouses] = React.useState([])

    useEffect( () => {
        if(query.isEmpty){
            Axios.get(process.env.REACT_APP_API_URL+`/house?location=${query['location']}&status=${query['status']}&price_from=${query['price_from']}&price_to=${query['price_to']}&property_id=${query['property_id'].toString()}`)
            .then(houses => {
                setHouses(houses.data.data)
            })
            .catch(err => {
                //console.log(err)
            }) 
        }else{
            Axios.get(process.env.REACT_APP_API_URL+`/house?active=true`)
            .then(houses => {
                setHouses(houses.data.data)
            })
            .catch(err => {/* console.log(err.message) */})
    
        }

    }, [])


    const handleChange =(event) => {
        const { name, value} = event.target;

        setValue((state) => ({
            ...state,
            [name]: value
        }))
    }

    return (
        <div className="properties">
            <div className="property-header">
                {/* <img src="https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/short_banner_bg.jpg" alt="about-us"/> */}
                <div className="after"></div>
                <h3 style={{color:'#d09819'}}>Properties</h3>
                <Breadcrumbs className="breadcrumb" style={{marginTop:'6%'}}>
                    <a href="/" style={{color:"inherit"}}>Home</a>
                    <Typography>Properties</Typography>
                </Breadcrumbs>
            </div>
            {/* <Container> */}
                <div className="propertyForSale">
                    <Grid 
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-start" 
                        spacing={5}
                    >
                        <Grid items md={8} xs={12}>
                        <h3 className="property-title">Property For Sale</h3>

                            <Grid 
                                container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                                spacing={5}>

                            {
                                    houses.length ?(
                                        houses.filter(house => house.property.active && house.property.status=="sale").map(house => (
                                            <Grid items md={4} sm={12} className="">
                                                <div className="property">
                                                    <div className="prop-image">
                                                        <img src= {house.property.images[0]} alt="main-img" className="main-image" />
                                                        {/* <img src="https://apkaghar.pk/images/property/10ad5c87-1c17-4ec4-a2dc-efaa0c1a4416.jpg" alt="secondary-img" className="secondary-image"/> */}
                                                    </div>
                                                    <div className="prop-data">
                                                        <div className="props-data-initial">
                                                            <Chip 
                                                                size="small" 
                                                                label={house.property.price + "Crore PKR"} 
                                                                color="primary"
                                                            />
                                                            <a href={`/property/${house._id}`}>
                                                                <h4>{house.property.title}</h4>
                                                            </a>
                                                            <p>{house.property.address}</p>
                                                        </div>
                                                        <div className="prop-details">
                                                            <Grid 
                                                            container
                                                            direction="row"
                                                            justify="space-between"
                                                            alignItems="center" 
                                                            spacing={5}>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Area:</h4>
                                                                    <p>{house.property.area} {house.property.area_unit}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Bed:</h4>
                                                                    <p>{house.bedrooms}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Baths:</h4>
                                                                    <p>{house.bathrooms}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>ID:</h4>
                                                                    <p>{house.property_id}</p>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        ))
                                    ): <h4 style={{textAlign:'center', fontSize:'22px', fontWeight:'400', color:'white'}}>No Property for Sale at the moment</h4>
                                }

                            </Grid>
                            <h3 className="property-title">Property For Rent</h3>

                            <Grid 
                                container
                                direction="row"
                                justify="center"
                                alignItems="center" 
                                spacing={5}>
                                {
                                    houses.length ?(
                                        houses.filter(house => house.property.status=="rent").map(house => (
                                            <Grid items md={4} sm={12} className="">
                                                <div className="property">
                                                    <div className="prop-image">
                                                        <img src= {house.property.images[0]} alt="main-img" className="main-image" />
                                                        {/* <img src="https://apkaghar.pk/images/property/10ad5c87-1c17-4ec4-a2dc-efaa0c1a4416.jpg" alt="secondary-img" className="secondary-image"/> */}
                                                    </div>
                                                    <div className="prop-data">
                                                        <div className="props-data-initial">
                                                            <Chip 
                                                                size="small" 
                                                                label={house.property.price + "Crore PKR"} 
                                                                color="primary"
                                                            />
                                                            <a href="/property/2">
                                                                <h4>{house.property.title}</h4>
                                                            </a>
                                                            <p>{house.property.address}</p>
                                                        </div>
                                                        <div className="prop-details">
                                                            <Grid 
                                                            container
                                                            direction="row"
                                                            justify="space-between"
                                                            alignItems="center" 
                                                            spacing={5}>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Area:</h4>
                                                                    <p>{house.property.area} {house.property.area_unit}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Bed:</h4>
                                                                    <p>{house.bedrooms}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>Baths:</h4>
                                                                    <p>{house.bathrooms}</p>
                                                                </Grid>
                                                                <Grid items md={3} sm={3}>
                                                                    <h4>ID:</h4>
                                                                    <p>{house.property_id}</p>
                                                                </Grid>
                                                            </Grid>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Grid>
                                        ))
                                    ): <h4 style={{textAlign:'center', fontSize:'22px', fontWeight:'400', color:'white'}}>No Property for Rent at the moment</h4>
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            {/* // </Container> */}
        </div>
    )
}

export default Properties