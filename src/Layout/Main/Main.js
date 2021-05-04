import React, { useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Header, Footer } from "./components";

const useStyles = makeStyles((theme) => ({
    root: {
    }
}));

const Main = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
      <div
        className={''}
      >
        <Header history={props.children.props.history} />
        <main className={classes.root}>
          {children}
        <Footer />
        </main>
      </div>
    );
};

Main.propTypes = {
    children: PropTypes.node,
};
  
export default Main;