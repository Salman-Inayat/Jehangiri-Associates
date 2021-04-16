import React from "react";
import "./style.css";
import { Grid, Snackbar } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import PhoneIcon from "@material-ui/icons/Phone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Axios from "axios";

AOS.init({});
function ContactUs() {
  const [value, setValue] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (event) => {
    let { name, value } = event.target;
    setValue((state) => ({
      ...state,
      [name]: value,
    }));
    console.log(value)
  };

  const [open, setOpen] = React.useState(false);
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const handleSubmit = () => {
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
  };
  return (
    <div className="contact-us" style={{}}>
      <Grid container>
        <Grid items md={12} sm={12} className="minHeightGrid">
          <div
            className="contact-container"
            style={{
              marginTop: "0px",
              marginBottom: "0px",
              backgroundColor: "#1b1e34",
            }}
          >
            <Grid container spacing={2} className="gridContainer">
              <Grid
                item
                md={6}
                sm={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRight: "3px solid #d09819",
                }}
              >
                <h3 style={{ margin: "auto" }} className="contact-header">
                  Get In Touch
                </h3>
              </Grid>
              <Grid item md={6} sm={12}>
                <form>
                  <input
                    name="name"
                    type="text"
                    placeholder="Name*"
                    variant="outlined"
                    value={value["name"]}
                    onChange={handleChange}
                    className="contact-form top-form"
                  />
                  <input
                    name="email"
                    placeholder="Email*"
                    type="email"
                    variant="outlined"
                    className="contact-form top-form"
                    value={value["email"]}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <input
                    name="subject"
                    placeholder="Subject*"
                    type="text"
                    variant="outlined"
                    className="contact-form top-form"
                    value={value["subject"]}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <textarea
                    name="message"
                    variant="outlined"
                    aria-label="message"
                    placeholder="Your Message*"
                    rowsMin={20}
                    className="contact-form"
                    value={value["message"]}
                    onChange={handleChange}
                    required
                  />
                  <br />
                  <button
                    className=" contact-submit-button "
                    type="button"
                    data-aos="fade-up"
                    onClick={() => {
                      handleSubmit();
                    }}
                    style={{
                      borderRadius: "35px",
                      border: "2px solid darkgoldenrod",
                      backgroundColor: "transparent",
                    }}
                  >
                    <span 
                      style={{ textDecoration: "none", color: "darkgoldenrod" }}
                    >
                      Contact Us
                    </span>
                  </button>
                </form>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>
      <Snackbar
        open={open}
        autoHideDuration={100}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert onClose={handleClose} severity="success">
          Feedback sent!
        </Alert>
      </Snackbar>

      <Grid conatiner spacing={5}>
        <Grid
          items
          md={4}
          xs={12}
          className="contact-box"
          data-aos="fade-right"
          style={{ backgroundColor: "#232745" }}
        >
          <div className="contact-icon">
            <PhoneIcon style={{ "font-size": "3rem" }} />
          </div>
          <div className="contact-details">
            <h4>UAN</h4>
            <a href="tel:+92 321 9941148">+92 321 9941148</a>
          </div>
        </Grid>
        <Grid
          items
          md={4}
          xs={12}
          className="contact-box middle"
          data-aos="fade-up"
          style={{ backgroundColor: "#121423" }}
        >
          <div className="contact-icon">
            <WhatsAppIcon style={{ "font-size": "3rem" }} />
          </div>
          <div className="contact-details">
            <h4>WhatsApp</h4>
            <a href="tel:+92 321 9941148">+92 321 9941148</a>
          </div>
        </Grid>
        <Grid
          items
          md={4}
          xs={12}
          className="contact-box"
          data-aos="fade-left"
          style={{ backgroundColor: "#232745" }}
        >
          <div className="contact-icon">
            <PhoneIphoneIcon style={{ "font-size": "3rem" }} />
          </div>
          <div className="contact-details">
            <h4>Cellular</h4>
            <a href="tel:+92 321 9941148">+92 321 9941148</a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default ContactUs;
