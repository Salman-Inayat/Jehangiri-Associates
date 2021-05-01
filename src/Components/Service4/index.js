import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import {Grid, Card, CardActionArea,CardContent, CardMedia, Typography, Modal, Button} from "@material-ui/core";


AOS.init({})

function Service4(){
    const [open, setOpen] = React.useState(false);


        return(
            <div className="Services">
                <div className='services-title' data-aos="fade-up">
                    <h4 style={{marginTop:"40px"}}>Architectural Work And Interior Designing</h4>
                </div>
                <Grid container spacing={2} style={{padding:"40px"}}>
                    <Grid item md={4} sm={6} xs={12}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="200"
                                image="d1.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Designing And Layout of the Building 2D, 3D
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
                                image="d2.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Wallpapers
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
                                image="d3.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Wooden Floors
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
                                image="d4.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Steel and Aluminium Fabrication
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
                                image="d5.jpeg"
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                 Textures                         
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
                
            </div>
         )   
    }
 


export default Service4;