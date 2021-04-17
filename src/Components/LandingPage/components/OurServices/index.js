import React from 'react'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTools, faHome, faDoorOpen, faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import {Grid, Card, CardActionArea,CardContent, CardMedia,CardActions, Typography, Modal, Button} from "@material-ui/core";


AOS.init({})
function OurServices(){
 return(
    <div className="Our-Services">
        <div className='services-title' data-aos="fade-up">
            <h4 style={{color:'white'}}>Our Services</h4>
            <p style={{color:'white'}} data-aos="zoom-in-up">Everything you need at your finger tips</p>
        </div>
        <div className="services">
        <Grid container spacing={12}>
            <Grid items md={3} xs={12}>
                <Card id='1' className='cards' >
                    <CardActionArea>
                        <FontAwesomeIcon className='icon' icon={faTools} style={{ height: 60, width: 60, margin:'16% 40%', color:'#000d74' }}/>
                        <CardContent>
                        <Typography className="services-title" gutterBottom variant="h5" component="h2">
                            Construction and Oblique Renovation                        </Typography>
                        <Typography className="services-title" variant="body2" color="textSecondary" component="p" style={{marginBottom:'20px'}}>
                            Jahangiri Associates provides its clients with best Construction and Renovation services for your Home. 
                        </Typography>
                        <CardActions>
                            <Button size="small"><a href="/construction">View More</a></Button>
                        </CardActions>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid items md={3} xs={12}>
                <Card id='2' className='cards'>
                    <CardActionArea>
                        <FontAwesomeIcon className='icon' icon={faHome} style={{ height: 60, width: 60, margin:'16% 40%', color:'#000d74' }}/>
                        <CardContent>
                        <Typography className="services-title" gutterBottom variant="h5" component="h2">
                            Property Management Services
                        </Typography>
                        <Typography className="services-title" variant="body2" color="textSecondary" component="p" style={{marginBottom:'20px'}}>
                            Jahangiri Associates helps you in Sale, Purchase, and  Management of your Property                        
                        </Typography>
                        <CardActions>
                            <Button size="small"><a href="/property">View More</a></Button>
                        </CardActions>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid items md={3} xs={12}>
                <Card  className='cards'>
                    <CardActionArea>
                        <FontAwesomeIcon className='icon' icon={faDoorOpen} style={{ height: 60, width: 60, margin:'16% 40%', color:'#000d74' }}/>
                        <CardContent>
                        <Typography className="services-title" gutterBottom variant="h5" component="h2">
                            Electrical Engineering And Security Services
                        </Typography>
                        <Typography className="services-title" variant="body2" color="textSecondary" component="p">
                            We are specialised in providing services of Architecture and Interior Designing, including wallpapers, wooden floors, and Stell & Aluminium Fabrication                        </Typography>
                        <CardActions>
                        <Button size="small"><a href="/electrical">View More</a></Button>
                        </CardActions>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Grid items md={3} xs={12}>
                <Card className='cards'>
                    <CardActionArea>
                        <FontAwesomeIcon className='icon' icon={faPencilRuler} style={{ height: 60, width: 60, margin:'16% 40%', color:'#000d74' }}/>
                        <CardContent>
                        <Typography className="services-title" gutterBottom variant="h5" component="h2">
                            Architectural Work And Interior Designing
                        </Typography>
                        <Typography className="services-title" variant="body2" color="textSecondary" component="p">
                        We are specialised in providing services of Architecture and Interior Designing, including wallpapers, wooden floors, and Stell & Aluminium Fabrication
                        </Typography>
                        <CardActions>
                        <Button size="small"><a href="/design">View More</a></Button>
                        </CardActions>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            </Grid> 
        </div>
    </div>
 )   
}

export default OurServices;