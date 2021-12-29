import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import HomePage from "./HomePage";
import Navbar from "./NavBar";
import UpdateProduct from "./UpdateProduct";
import Login from "./LogIn";
import UserPage from "./UserPage";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          {" "}
          <Navbar />
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route  path="/login" component={Login} />
        <Route  exact path="/products" component={AllProducts} />
        <Route  path="/products/:productId" component={SingleProduct} />

        <Route
          path="/products/:productId/updateProduct"
          component={UpdateProduct}
        />

<Route  path="/home" component={UserPage} />
        
        
      </div>
    </Router>
  );
};

export default Routes;
