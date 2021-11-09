import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Menubar from "./components/Menubar/Menubar";
import Home from "./components/Home/Home";
import AddServices from "./components/AddServices/AddServices";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";
import Dashbaord from "./components/Dasboard/Dashbaord";
import Details from "./components/Details/Details";
import MyBookings from "./components/MyBookings/MyBookings";
import MangeOrder from "./components/MangeOrder/MangeOrder";

function App() {
  return (
    <div className="App">
      <Router>
        <Menubar></Menubar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/myOrder">
            <MyBookings></MyBookings>
          </Route>
          <Route exact path="/services/:serviceId">
            <Details></Details>
          </Route>
          <Route exact path="/addServices">
            <AddServices></AddServices>
          </Route>
          <Route exact path="/manageOrders">
            <MangeOrder></MangeOrder>
          </Route>
          <Route path="/dashboard">
            <Dashbaord></Dashbaord>
          </Route>
          <Route exact path="/addService">
            <AddServices></AddServices>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
