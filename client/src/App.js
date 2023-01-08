import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import Service from "./Components/Service";
import AddCar from "./Components/AddCar";
import AvailableCars from "./Components/AvailableCars";

import Login from "./Components/Login";
import Footer from "./Components/Footer";

import "./index.css";
import Signup from "./Components/Signup";
import UpdateForm from "./Components/UpdateForm";
import CarDetail from "./Components/CarDetail";
import Profile from "./Components/Profile";
import HandleUsers from "./Components/HandleUsers";
import UpdateProfile from "./Components/UpdateProfile";
import UpdateClientProfile from "./Components/UpdateClientProfile";
import ServiceBuyerGuide from "./Components/ServiceBuyerGuide";
import ServiceCarCheck from "./Components/ServiceCarCheck";
import ServiceInsurance from "./Components/serviceInsurance";
import ServiceCustomerSupport from "./Components/ServiceCustomerSupport";
import ForgotPassword from "./Components/ForgotPassword";
import ResetPassword from "./Components/ResetPassword";
import InsuranceDetail from "./Components/InsuranceDetail";
import ServiceWarrenty from "./Components/ServiceWarrenty";

import ResponsiveAppBar from "./Components/ResponsiveAppBar";
import ScrollToTop from "./Components/ScrollToTop";
import Contactus from "./Components/Contactus";
import TopButton from "./Components/TopButton";
import Chat from "./Components/Chat";
import PageNotFound from "./Components/PageNotFound";
import OwnerProfile from "./Components/OwnerProfile";
import SalesManagerProfile from "./Components/SalesManagerProfile";
import TechnicianProfile from "./Components/TechnicianProfile";
import AdvisorProfile from "./Components/AdvisorProfile";

function App() {
  return (
    <div className="page-container  ">
      <div className="content-wrap">
        <Router>
          <ScrollToTop />
          <ResponsiveAppBar />
          <Switch>
            <Route path="/contact-us" component={Contactus} />{" "}
            <Route
              path="/handle-users/update-client/:id"
              component={UpdateClientProfile}
            />{" "}
            <Route path="/handle-users" component={HandleUsers} />{" "}
            <Route path="/profile/update-profile" component={UpdateProfile} />{" "}
            <Route path="/profile" component={Profile} />{" "}
            <Route path="/sign-up" component={Signup} />{" "}
            <Route path="/service" component={Service} />
            <Route path="/service-buyer-guide" component={ServiceBuyerGuide} />
            <Route path="/service-car-check" component={ServiceCarCheck} />{" "}
            <Route
              path="/service-car-insurance/insurance-detail"
              component={InsuranceDetail}
            />{" "}
            <Route path="/owner-profile" component={OwnerProfile} />{" "}
            <Route
              path="/sales-manager-profile"
              component={SalesManagerProfile}
            />{" "}
            <Route path="/technician-profile" component={TechnicianProfile} />{" "}
            <Route path="/advisor-profile" component={AdvisorProfile} />{" "}
            <Route path="/service-car-insurance" component={ServiceInsurance} />{" "}
            <Route
              path="/service-customer-support"
              component={ServiceCustomerSupport}
            />{" "}
            <Route
              path="/service-warrenty-programe"
              component={ServiceWarrenty}
            />{" "}
            <Route path="/add-car" component={AddCar} />{" "}
            <Route path="/products/car-details/:id" component={CarDetail} />{" "}
            <Route path="/products/update-car/:id" component={UpdateForm} />{" "}
            <Route path="/products" component={AvailableCars} />{" "}
            <Route path="/login" component={Login} />{" "}
            <Route exact path="/reset-password" component={ForgotPassword} />{" "}
            <Route path="/reset-password/:token" component={ResetPassword} />{" "}
            <Route path="/" exact component={Home} />
            <Route path="/page-not-found" component={PageNotFound} />
            <Redirect to="/page-not-found" />
          </Switch>
        </Router>
      </div>
      <Chat />

      <TopButton />

      <Footer />
    </div>
  );
}

export default App;
