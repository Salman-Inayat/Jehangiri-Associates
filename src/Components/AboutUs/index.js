import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import { Breadcrumbs, Typography, Grid } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";

function AboutUs() {
  return (
    <div>
      <div className="about-us-header">
        {/* <img src="https://demos.sitepad.com/Real_Estate/sitepad-data/themes/realestate/images/short_banner_bg.jpg" alt="about-us"/> */}
        <div className="after"></div>
        <h3 className="Main-heading"style={{color:'black'}}>About Us</h3>
        <Breadcrumbs className="breadcrumb" style={{top:'65%'}}>
          <Link to="/" color="inherit">
            Home
          </Link>
          <Typography color="black">About</Typography>
        </Breadcrumbs>
      </div>
      <div className="KnowAboutUs">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={8}
        >
          <Grid items md={6} sm={12}>
            <img
              className="KAUimg"
              src="logoJah.png"
              alt=""
              width="60%"
              height="auto"
            />
          </Grid>
          <Grid items md={6} sm={12}>
            <div className="KAUcontent">
              <b>
                <h4>Who We Are And What We Do</h4>
              </b>
              <br />
              <h4>Know About Us</h4>
              <br />
              <h5>
                Jahangiri Associates is a prominent name in Real Estate of Rawalpindi & Islamabad, with the ambition to provide trustworthy services of Purchase, Sale and Rent of Commercial & Residential Plots / Homes to its valuable clients. We believe in team work with excellence, honesty and highly professional approach.
              </h5>
              <br />
              <h5>
              Jahangiri Associates Builder & Real Estate Consultants was established in the year 2003 
and the firm is registered with DHA-Islamabad. We are also a registered Firm with Pakistan Engineering Council (PEC). Having professional experience of over 17 years in the field of Real Estate Consultancy and Construction, We are offering professional services for construction, building, and maintenance in DHA, Bahria, CDA and other areas of Islamabad.
              </h5>
              <br />
              <Grid container>
                <Grid items md={6} sm={12}>
                  <div className="KAUfeature">
                    <StarIcon
                      style={{ color: "#d09819", "margin-right": "1.5rem" }}
                    />
                    <h5>
                      Sale/purchase of residential/commercial property in
                      DHA/CDA/ Bahria Town Projects.
                    </h5>
                  </div>
                </Grid>
                <Grid items md={6} sm={12}>
                  <div className="KAUfeature">
                    <StarIcon
                      style={{ color: "#d09819", "margin-right": "1.5rem" }}
                    />
                    <h5>
                      Designing/Planning and Construction of your dream
                      house/plaza
                    </h5>
                  </div>
                </Grid>
                <Grid items md={6} sm={12}>
                  <div className="KAUfeature">
                    <StarIcon
                      style={{ color: "#d09819", "margin-right": "1.5rem" }}
                    />
                    <h5>Interior designing</h5>
                  </div>
                </Grid>
                <Grid items md={6} sm={12}>
                  <div className="KAUfeature">
                    <StarIcon
                      style={{ color: "#d09819", "margin-right": "1.5rem" }}
                    />
                    <h5>Property management services</h5>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default AboutUs;
