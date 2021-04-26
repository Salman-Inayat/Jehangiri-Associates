import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid, Card, CardActionArea,CardContent, CardMedia, Typography, Modal, Button} from "@material-ui/core";


AOS.init({})

function Service1(){
    const [open, setOpen] = React.useState(false);



        return(
            <div className="Services">
                <div className='services-title' data-aos="fade-up">
                    <h4 style={{marginTop:"40px"}}>Building Maintenence And Construction</h4>
                </div>
                <Grid container spacing={2} style={{padding:"40px"}}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="c1.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Planning 
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
                                image="c2.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Designing 
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
                                image="c3.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Construction of your Dream Building 
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
                                image="c4.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                   Renovation of Building                             
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
         )   
    }
 


export default Service1;