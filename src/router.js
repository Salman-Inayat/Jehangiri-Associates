import React from "react";
import {
  Switch,
  Route,
} from "react-router-dom";

import LandingPage from './Components/LandingPage'
import AboutUs from './Components/AboutUs'
import Properties from './Components/Properties'
import PropertyDetail from './Components/PropertyDetail'
import Service1 from './Components/Service1'
import Service2 from './Components/Service2'
import Service3 from './Components/Service3'
import Service4 from './Components/Service4'
import ContactUs from "./Components/ContactUs"

import { Main as MainLayout } from "./Layout";

const Routes = ({ history }) => {
    return (
      // <Layout>
      <MainLayout>
        <Switch>
            <Route
            path="/"
            exact
            render={(props) => (
                <LandingPage {...props} />
            )}
            ></Route>
            <Route
            path="/about-us"
            exact
            component={AboutUs}
            ></Route>
            <Route
            path="/properties"
            exact
            component={Properties}
            ></Route>
            <Route
            path="/property/:id"
            exact
            render={ props => (
              <PropertyDetail {...props}/>
            )}
            ></Route>
            <Route
            path={`properties?:property_id&:status&:price_from&:price_to&:location`}
            exact
            render={ props => (
              <Properties {...props}/>
            )}></Route>
            <Route
            path="/construction"
            exact
            component={Service1}
            ></Route>
            <Route
            path="/property"
            exact
            component={Service2}
            ></Route>
            <Route
            path="/electrical"
            exact
            component={Service3}
            ></Route>
            <Route
            path="/design"
            exact
            component={Service4}
            ></Route>
            <Route
            path="/contactus"
            exact
            component={ContactUs}
            ></Route>
        </Switch>
      </MainLayout>
      // </Layout>
    );
  };
  
  export default Routes;
  