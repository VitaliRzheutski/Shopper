import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import AllProducts from "./AllProducts";
const Routes = () => {
  return (
    <Router>
      <div>
        <nav>
          {" "}
        </nav>
        
        <Route  path="/products" component={AllProducts} />
        
      </div>
    </Router>
  );
};

export default Routes;
