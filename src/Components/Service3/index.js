import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid, Card, CardActionArea,CardContent, CardMedia, Typography, Modal, Button} from "@material-ui/core";


AOS.init({})

function Service3(){
    const [open, setOpen] = React.useState(false);

        return(
            <div className="Services">
                <div className='services-title' data-aos="fade-up">
                    <h4 style={{marginTop:"40px"}}>Electrical Engineering And Security Services</h4>
                </div>
                <Grid container spacing={2} style={{padding:"40px"}}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="e1.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Power Management System
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
                                image="e2.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Solar Power Installation
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
                                image="e3.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                AC Servicing/ Gas Charging and Repair.
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
                                image="e4.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 HVAC Installation and Maintenance
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
                                image="e5.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 LED/ Sound System Installation
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
                                image="e6.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 CCTV Camera Installation.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
         )   
    }
 


export default Service3;