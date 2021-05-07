import React from 'react'
import './style.css'
import {
    Grid,
} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';


function Footer(){
    return(
        <div className="footer">
            <Grid 
                container
                direction="row"
                justify="space-evenly"
                alignItems="flex-start" 
                spacing={12}
            >
                <Grid items md={4} xs={12} className="footer-content">
                    <h4>Information</h4>
                    <p>Jahangiri Associates deals in all sort of property matters such as sale, purchase, construction, hiring for rent, commercial as well as residential properties in Defence Housing Authority ( DHA ), Bahria Town, and all approved & well developed Societies of Rawalpindi and Islamabad. Our motto is to provide best and trustworthy services to our customers</p>
                </Grid>
                <Grid items md={4} xs={12} className="footer-content">
                    <h4>About</h4>
                    <ul>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Search Property</li>
                    </ul>
                </Grid>
                <Grid items md={4} xs={12} className="footer-content">
                    <h4>Address</h4>
                    <ul>
                        <li>
                            <div className="footer-addr">
                                <HomeIcon style={{marginRight:'7px'}}/>
                                <p>Address: Office No # 3, 1st Floor, Plaza # 30, Street 19 A, Sector J DHA Phase II, Islamabad, Pakistan</p>
                            </div>
                        </li>
                        <li>
                            <div className="footer-addr">
                                <PhoneIcon style={{marginRight:'7px'}}/>
                                <p>+92 321 9941148</p>
                            </div>
                        </li>
                        <li>
                            <div className="footer-addr">
                                <MailIcon style={{marginRight:'7px'}}/>
                                <p>info@jahangiriassociates.com.pk</p>
                            </div>
                        </li>
                    </ul>
                </Grid>
            </Grid>
                <p className="company">&copy; {new Date().getFullYear()} JahangiriAssociates</p>

        </div>
    )
}

export default Footer;