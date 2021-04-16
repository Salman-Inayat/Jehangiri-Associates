import React from 'react'
import './style.css'
import {
    Grid,
    Snackbar,
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Axios from 'axios'

AOS.init({})
function ContactFromHome(){

    const [value, setValue] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
        // errors:[]
    });

    const handleChange = (event) =>{
        let {name, value} = event.target;
        setValue((state) => ({
            ...state,
            [name]: value
        }))
    }

    const [open, setOpen] = React.useState(false)
    const [error, setErrors] = React.useState({});
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }
    
        setOpen(false);
    };
    const handleSubmit = () => {
        if(validateForm()){
            let data = {
                email: value["email"],
                subject: value["subject"],
                name: value["name"],
                message: value["message"],
              };
            Axios.post(process.env.REACT_APP_BACKEND_DEV + `/contact`, data)
            .then((response) => {
                if(response.status==200){
                setOpen(true)
                }; 
            })
            .catch((err) => err.message);
        }
      };


    function validateForm() {
        // let errors = {};
        let formIsValid = true;
  
        if (!value.name) {
          formIsValid = false;
          error.name = "*Please enter your name.";
          console.log(error.name)
        }
        
        if (!value.email) {
            formIsValid = false;
            error.email = "*Please enter your email";
            console.log(error.email)
          }

        if (!value.subject) {
            formIsValid = false;
            error.subject = "*Please enter the subject";
        }

        if (!value.message) {
            formIsValid = false;
            error.message = "*Please enter the message";
        }
  
        setErrors(() => ({
            error: error
        }))

        return formIsValid;
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
                            Property Here
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
                            placeholder="Name" 
                            type="text" 
                            name="name"
                            value={value["name"]}
                            required
                            onChange={handleChange}
                            className="searchInput"
                        />     
                    </Grid>
                    <Grid items md={6} xs={12}>
                        <input 
                                placeholder="Email*" 
                                type="email" 
                                name="email"
                                value={value["email"]}
                                onChange={handleChange}
                                className="searchInput"
                            />
                    </Grid>
                    <Grid items md={6} xs={12}>
                        <input
                            value={value["subject"]}
                            onChange={handleChange}
                            name="subject"
                            type="text"
                            placeholder="Subject"
                            className="searchInput"
                        />
                    </Grid>
                    <Grid items md={6} xs={12}>
                        <textarea
                            name="message"
                            variant="outlined"
                            aria-label="message"
                            placeholder="Your Message*"
                            rows={2}
                            className="searchInput"
                            value={value['message']}
                            onChange={handleChange}
                        />
                    </Grid>
                </Grid>
                <button className="button CoH-button " type="button" data-aos="fade-up" style={{borderRadius:'35px', border:'2px solid darkgoldenrod', backgroundColor:'transparent'}} onClick={handleSubmit}>
                    <span style={{textDecoration:'none' , color:'darkgoldenrod'}}>Contact Us</span>
                </button>
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

export default ContactFromHome;