import React from "react";
import './style.css'
import {
  Grid,
  Hidden,
  SwipeableDrawer,
  List ,
  ListItem,
  ListItemText,
  Divider
}from '@material-ui/core'
import {Link} from 'react-router-dom'
import MenuIcon from '@material-ui/icons/Menu';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailIcon from '@material-ui/icons/Mail';
import Navbar from "./navbar"

function Header() {
    let headerItems = [
      {
        name: 'Home',
        link: '/'
      }, 
      {
        name: 'About',
        link: '/about-us'
      }, 
      {
        name: 'Services',
        link: '/design'
      }, 
      {
        name: 'Contact Us',
        link: '/contactus'
      }
      ]
    let socialItems = [
      {
        name: 'facebook',
        icon: <FacebookIcon/>,
        color: '#3B5998',
        link: 'https://www.facebook.com/realinvestment.JA/'
      },
      {
        name: 'twitter',
        icon: <TwitterIcon/>,
        color: '#1DA1F2',
        link: '/'
      },
      {
        name: 'youtube',
        icon: <YouTubeIcon/>,
        color: '#ff0000',
        link: '/'
      },
      {
        name: 'instagram',
        icon: <InstagramIcon/>,
        color: '#3f729b',
        link: 'https://instagram.com/jahangiriassociates.pk'
      },
      {
        name: 'instagram',
        icon: <MailIcon/>,
        color: '#D44638',
        link: '/'
      },
    ]

    const [drawer, setDrawer] = React.useState(false)
    return (
      <div>
        <div className="container " style={{paddingTop:'30px', marginBottom:'30px'}}>
            <div className="row" >
            <Grid 
              container
              direction="row"
              justify="flex-start"
              alignItems="center" 
              spacing={5}
              style={{width:'100%'}}>
                <Grid items md={6} xs={12}>
                  <div className="col-3 " style={{display:'flex', flexDirection:'row', alignItems:'center', marginLeft:'30px'}}>
                        <img alt="" src="icon.png" style={{height:'55px'}}/>
                        <h2 style={{fontWeight:'600', fontSize:'40px'}}>Jahangiri Associates</h2>
                  </div>
                </Grid>
                <Hidden smDown>
                  <Grid items md>
                    <div className="col-md-2  " >
                          <a href="tel:123456789" style={{fontSize:'16px', 'text-decoration': 'none', color: 'inherit'}}>Call -+92 321 9941148 </a>
                    </div>
                  </Grid>
                  <Grid items md>
                    <div className="" >
                        <a href="mailto:Broker@Mail.Com" style={{fontSize:'16px', 'text-decoration': 'none', color: 'inherit'}}>Email - info@jahangiriassociates.com.pk</a>
                    </div>
                  </Grid>
                </Hidden>
            </Grid>
            </div>
        </div> 
        <Navbar/>
        {/* <div className="header">
        <Grid container>
        <Hidden smUp>
        <Grid items sm={12}>
          <MenuIcon onClick={() => setDrawer(!drawer)} className="menu-icon" />
          <SwipeableDrawer
            anchor="right"
            open={drawer}
            onClose={() => setDrawer(false)}
            onOpen={() => setDrawer(true)}
            style={{backgroundColor:'blue'}}
          >
            {
              headerItems.map(item => (
                <List component="nav" className="navItem" onClick={item.link}>
                  <ListItem button>
                    <ListItemText primary={item.name} />
                  </ListItem>
                </List>
                  )
              )
            }
            <Divider/>
          </SwipeableDrawer>
        </Grid>
        </Hidden>
          <Hidden smDown>
            <Grid items md={6} xs={12}>
              <div className="navbar">
              {
                headerItems.map(item => (
                  <a href={item.link} className="navItem">
                    {item.name}
                  </a>)
                )
              }
              </div>
            </Grid>
          </Hidden>
          <Hidden smDown>
            <Grid items md>
              <div className="social-contact">
                {
                  socialItems.map( item => (
                    <a href={item.link} style={{color: item.color }} className="menu-icon">
                      {item.icon}
                    </a>
                  ))
                }
              </div>
            </Grid>
          </Hidden>
        </Grid>
        </div> */}
      </div>
    );
}

export default Header;