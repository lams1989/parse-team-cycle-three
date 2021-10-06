import React from "react";
import Loggin from "./components/Loggin";
import ProductManager from "./components/ProductManager";
import SalesManager from "./components/SalesManager";
import SellerManager from "./components/SellerManager";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar";
import '../src/App.scss'


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="content">
          <Route path="/" exact={true} component={Loggin} />
          <Route path="/product-manager" exact={true} component={ProductManager} />
          <Route path="/seller-manager" exact={true} component={SellerManager} />
          <Route path="/sales-manager" exact={true} component={SalesManager} />
        </div>
      </div>
    </Router>

  );
}

export default App;
