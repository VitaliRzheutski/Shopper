import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import HomePage from "./HomePage";
import Navbar from "./NavBar";
import UpdateProduct from "./UpdateProduct";

const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          {" "}
          <Navbar />
        </nav>
        <Route exact path="/" component={HomePage} />
        <Route  exact path="/products" component={AllProducts} />
        <Route  path="/products/:productId" component={SingleProduct} />

        <Route
          path="/products/:productId/updateProduct"
          component={UpdateProduct}
        />
      </div>
    </Router>
  );
};

export default Routes;
