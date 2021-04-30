import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid, Card, CardActionArea,CardContent, CardMedia, Typography, Modal, Button} from "@material-ui/core";


AOS.init({})

function Service2(){
    const [open, setOpen] = React.useState(false);


        return(
            <div className="Services">
                <div className='services-title' data-aos="fade-up">
                    <h4 style={{marginTop:"40px"}}>Property Management Services</h4>
                </div>
                <Grid container spacing={2} style={{padding:"40px"}}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="p1.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Sale / Purchase of Residential / Commercial Plots in DHA Islamabad, Bahria Town, and CDA Islamabad 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="p2.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Sale / Purchase of Houses / Commercial Properties in DHA Islamabad, Bahria Town, and CDA Islamabad 
                              </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="p3.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  Property Management of your House, i.e. Tax paying, Maintenance, Renovation, Dealing with Tenant etc                                   </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </div>
         )   
    }
 


export default Service2;