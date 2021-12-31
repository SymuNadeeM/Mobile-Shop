import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Productlist from "./Component/Productlist";
import Details from "./Component/Details";
import NotFound from "./Component/NotFound";
import Modal from "./Component/Modal";
import Cart from "./Component/Cart";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Productlist} />
        <Route exact path="/details" component={Details} />
        <Route exact path="/cart" component={Cart} />
        <Route component={NotFound} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
