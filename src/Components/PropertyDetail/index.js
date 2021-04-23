import React, {useEffect} from 'react'
import './style.css'
import {
    Box,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableRow,
    TableContainer,
    Avatar,
    Chip,
    Container,
    Card,
    Divider ,
    Breadcrumbs,
    Typography,
    makeStyles,
    Button,
    Snackbar,
} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom'
import Carousel from 'react-material-ui-carousel'
import {Paper} from '@material-ui/core'
import Axios from 'axios'
import MuiAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

function PropertyDetail(props){

    
    // const handleImageClick = (event) => {
    //     setActiveImg(event.target.src);
    // };
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const images = [
        'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/short_banner_bg.jpg',
        'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg01.jpg',
        'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg02.jpg',
    ]
    // const [activeImg, setActiveImg] = React.useState(images[0]);
    
    
        const SLIDE_INFO = [
            {  image: 'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/short_banner_bg.jpg'},
            {  image: 'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg01.jpg'},
            {  image: 'https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/banner-bg02.jpg'}
        ];
    
        function Example({images})
        {
            return (
                <Carousel>
                    {
                        images.map( (item, i) => <Item key={i} item={item} /> )
                    }
                </Carousel>
            )
        }
        
        function Item({item})
        {
            return (
                <Paper style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'40px'}}>
                    <img style={{  display: 'block',
                        maxWidth: '60%',
                        maxHeight:'40%',
                        width: 'auto',
                        height: 'auto'}} src={item} alt="alt"></img>
                </Paper>
            )
        }    
  

        const [value, setValue] = React.useState({
            name: '',
            email: '',
            message: ''
        })
        const [property, setProperty] = React.useState([])

        const handleChange = event => {
            const { name, value} = event.target;
    
            setValue((state) => ({
                ...state,
                [name]: value
            }))
        }
        const [openFeedback, setOpenFeedback] = React.useState(false)
        function Alert(props) {
            return <MuiAlert elevation={6} variant="filled" {...props} />;
        }
        const handleCloseFeedback = (event, reason) => {
            if (reason === 'clickaway') {
            return;
            }
        
            setOpenFeedback(false);
        };
        const handleSubmit = () => {
            let data ={
                property_id: property[0].property.property_id,
                email: value['email'],
                name: value['name'],
                type: 'house',
                message: value['message']
            }
            Axios.post(process.env.REACT_APP_API_URL +`/feedback`, data)
            .then((response) => {
                if(response.status==200){
                 setOpen(true)
                }; 
             })
            .catch(err => err.message)
        
        }
        useEffect(() => {
            Axios.get(process.env.REACT_APP_API_URL +`/house?_id=${props.match.params.id}`)
            .then(property => setProperty(property.data.data))
            .catch(err => {/* console.log(err.message) */})
        }, [])


        const styles = (theme) => ({
            root: {
              margin: 0,
              padding: theme.spacing(2),
            },
            closeButton: {
              position: 'absolute',
              right: theme.spacing(1),
              top: theme.spacing(1),
              color: theme.palette.grey[500],
            },
          });

          const DialogTitle = withStyles(styles)((props) => {
            const { children, classes, onClose, ...other } = props;
            return (
              <MuiDialogTitle disableTypography className={classes.root} {...other}>
                {onClose ? (
                  <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                  </IconButton>
                ) : null}
              </MuiDialogTitle>
            );
          });

          const DialogContent = withStyles((theme) => ({
            root: {
              padding: theme.spacing(2),
            },
          }))(MuiDialogContent);

          const DialogActions = withStyles((theme) => ({
            root: {
              margin: 0,
              padding: theme.spacing(1),
            },
          }))(MuiDialogActions);

          
            const [open, setOpen] = React.useState(false);
          
            const handleClickOpen = () => {
              setOpen(true);
            };
            const handleClose = () => {
              setOpen(false);
            };
            


        //     const popup = () => {
        //         return(
        //             <div>
        //         {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        //           Open dialog
        //         </Button> */}
        //             <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        //             <DialogTitle id="customized-dialog-title" onClose={handleClose}/>
        //             <DialogContent dividers>
        //                 <Typography gutterBottom>
        //                 Feedback successfully sent
        //                 </Typography>
        //             </DialogContent>
        //             <DialogActions>
        //                 <Button autoFocus onClick={handleClose} color="primary">
        //                 Ok
        //                 </Button>
        //             </DialogActions>
        //             </Dialog>
        //         </div>
        //         )

        //   }

    return(
        <div>
            <div className="property-detail-header">
                {/* <img src="https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/short_banner_bg.jpg" alt="about-us"/> */}
                <div className="after"></div>
                <h3 style={{color:'#d09819'}}>Properties</h3>
                <Breadcrumbs className="breadcrumbProp">
                    <a href="/" style={{color:"inherit"}}>Home</a>
                    <a href="/properties" style={{color:"inherit"}}>Properties</a>
                    <Typography color="#d09819">Property</Typography>
                </Breadcrumbs>
            </div>
            {
                property.length?(
                    <>
                    {/* {setActiveImg(property[0].property.images[0])} */}
                    <div className="property-title">
                        <h3>{property[0].property.title}</h3>
                        <h5>{property[0].property.address}, Bahawalpur</h5>
                    </div>
                    <Example images={property[0].property.images}/>
                    <Container>
                    
                    
                    <Grid 
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="baseline"
                        spacing={3}
                    > 
                        <Grid 
                            items
                            md={3}
                            xs={12}
                        >
                            <h4 className="contact-title  ">Quick Summary</h4>

                            <Divider />
                            <TableContainer component={Card} elevation={5}>
                                <Table className="property-details-table">
                                    <TableBody>
                                        <TableRow>
                                            <TableCell align="left">Property ID:</TableCell>
                                            <TableCell align="left">{property[0].property.property_id}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Location: </TableCell>
                                            <TableCell align="left">{property[0].property.location}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Price:</TableCell>
                                            <TableCell align="left">
                                                <Chip 
                                                    variant="outlined" 
                                                    avatar={<Avatar>PKR</Avatar>} 
                                                    label={property[0].property.price + 'Crore'}
                                                    color="primary"
                                                />
                                            </TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Property Type: </TableCell>
                                            <TableCell align="left">House</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Status: </TableCell>
                                            <TableCell align="left">For {property[0].property.status}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Area: </TableCell>
                                            <TableCell align="left">{property[0].property.area} {property[0].property.area_unit}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Beds: </TableCell>
                                            <TableCell align="left">{property[0].bedrooms}</TableCell>
                                        </TableRow>
                                        <TableRow>
                                            <TableCell align="left">Baths: </TableCell>
                                            <TableCell align="left">{property[0].bathrooms}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Grid>
                        <Grid
                            items
                            md={9}
                            sm={12}
                        >
                        <div className="property-desc">
                            <h4 className="contact-title ">Property Description</h4>
                            <Divider />
                            <p style={{color:'black'}}>{property[0].property.more_info}</p>
                        </div>
                        </Grid>
                    </Grid>
                    </Container>
                    </>
                ):null
            }
{/*             
            <div className="property-title">
                <h3>7 Marla Double Storey House for Sale in Allama Iqbal Avenue, Bahawalpur</h3>
                <h5>Allama Iqbal Avenue, Bahawalpur</h5>
            </div>
            <Example/>

            <Container> 

            
            
            
                <Grid 
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="baseline"
                    spacing={3}
                > 
                    <Grid 
                        items
                        md={3}
                        xs={12}
                    >
                        <h4 className="contact-title  ">Quick Summary</h4>

                        <Divider />
                        <TableContainer component={Card} elevation={5}>
                            <Table className="property-details-table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell align="left">Property ID:</TableCell>
                                        <TableCell align="left">421895</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Location: </TableCell>
                                        <TableCell align="left">Allama Iqbal Avenue</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Price:</TableCell>
                                        <TableCell align="left">
                                            <Chip 
                                                variant="outlined" 
                                                avatar={<Avatar>PKR</Avatar>} 
                                                label="1.2 Carore"
                                                color="primary"
                                            />
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Property Type: </TableCell>
                                        <TableCell align="left">House</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Status: </TableCell>
                                        <TableCell align="left">For Sale</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Area: </TableCell>
                                        <TableCell align="left">7 Marla</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Beds: </TableCell>
                                        <TableCell align="left">4</TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell align="left">Baths: </TableCell>
                                        <TableCell align="left">4</TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid
                        items
                        md={9}
                        sm={12}
                    >
                    <div className="property-desc">
                        <h4 className="contact-title ">Property Description</h4>
                        <Divider />
                        <p>7 Marla double story house Location allama iqbal avenue Details: Large gerage Drawing room with attach washroom Tv lounge 2 kitchen 4 bedrooms with attach washrooms 1 store room Open yard (Sehan) 2 loundry areas for washing clothes (Very suitable for two families) Demand price is : 1 caror 20 lac</p>
                    </div>
                    </Grid>
                </Grid>
            </Container> */}

            <Grid 
                container
            >
                <Grid items md={12} sm={12} className="minHeightGrid">
                    <div className="contact-container" style={{backgroundColor:'#1b1e34'}}>
                        <Grid container spacing={2} className="gridContainer">
                            <Grid item md={6} sm={12} style={{display: 'flex',justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRight:"3px solid #d09819"
                                            }}>
                                <h3 style={{margin:'auto'}} className="contact-header">Get In Touch</h3>
                            </Grid>
                            <Grid item md={6} sm={12}>
                            <form>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name*"
                            variant="outlined"
                            className="contact-form top-form"
                            value={value['name']}
                            onChange={handleChange}
                        />
                        <input
                            name="email"
                            placeholder="Email*"
                            type="email"
                            variant="outlined"
                            className="contact-form top-form"
                            value={value['email']}
                            onChange={handleChange}
                        />
                        <br />
                        {/* <input
                            type="text"
                            placeholder="Subject*"
                            variant="outlined"
                            className="contact-form"
                        /> */}
                        <textarea
                            name="message"
                            variant="outlined"
                            aria-label="message"
                            placeholder="Your Message*"
                            rowsMin={20}
                            className="contact-form"
                            value={value['message']}
                            onChange={handleChange}
                        />
                        <br/>
                        <button type="button" className="contact-submit-button"  onClick={
                            handleSubmit,
                            handleClickOpen} >
                            Send
                        </button>
                        </form>
                            </Grid>
                        </Grid>     
                    </div>
                </Grid>
            </Grid>
            <Snackbar open={open} autoHideDuration={100}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            >
                    <Alert onClose={handleClose} severity="success">
                    Feedback sent!
                    </Alert>
            </Snackbar>
        </div>
    )
}

export default PropertyDetail