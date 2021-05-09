/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState, useEffect } from "react";
import "./navbar.css";
import { CSSTransition } from "react-transition-group";
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Navbar() {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

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
    }
  ]

  return (
    <header className="Header">
      <CSSTransition
        in={!isSmallScreen || isNavVisible}
        timeout={350}
        classNames="NavAnimation"
        unmountOnExit
      >
      <nav className="nav">
        <ul className="nav__menu">
          <li className="nav__menu-item">
            <a href="/">Home</a>
          </li>
          <li className="nav__menu-item">
            <a href='/about-us'>About</a>
          </li>
          <li className="nav__menu-item">
            <a>Services</a>
            <Submenu />
          </li>
          <li className="nav__menu-item">
            <a href='/contactus'>Contact</a>
          </li>
        </ul>
      </nav>
      </CSSTransition>

      <nav className="social-contact">
        {
                  socialItems.map( item => (
                    <a href={item.link} style={{color: item.color }} className="menu-icon">
                      {item.icon}
                    </a>
                  ))
                }
        </nav>
      <button onClick={toggleNav} className="Burger">
        <img src='logoJah.png' style={{height:'40px'}}></img>
      </button>
    </header>
  );
}



function Submenu(){
    return (
      <ul className="nav__submenu">
        <li className="nav__submenu-item ">
          <a href='/construction'>Construction And Renovation</a>
        </li>
        <li className="nav__submenu-item ">
          <a href='/property'>Property Management</a>
        </li>
        <li className="nav__submenu-item ">
          <a href='/electrical'>Electrical And Security</a>
        </li>
        <li className="nav__submenu-item ">
          <a href='/design'>Design And Architecture</a>
        </li>
      </ul>
    )
}
