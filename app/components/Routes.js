import React from "react";
import {withRouter, Route, Switch} from 'react-router-dom'
import AllProducts from "./AllProducts";
import SingleProduct from "./SingleProduct";
import HomePage from "./HomePage";
import Navbar from "./NavBar";
import UpdateProduct from "./UpdateProduct";
import Login from "./LogIn";
import UserPage from "./UserPage";
import { me } from "../redux/user";
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import SignUp from "./SignUp";
import Cart from "./Cart";
import ViewUsers from "./ViewUsers";
import Checkout from "./CheckOut";



class Routes extends React.Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const {isLoggedIn} = this.props;
    // console.log('in routes logged in',isLoggedIn)

  return (
      <div>
        <nav>
          {" "}
          <Navbar />
        </nav>
        <Switch>

        <Route exact path="/" component={UserPage} /> 
        <Route  path="/login" component={Login} />
        <Route path="/cart" component={Cart} />
        <Route  exact path="/products" component={AllProducts} />
        <Route  path="/products/:productId" component={SingleProduct} />
        <Route path="/signup" component={SignUp} />
        <Route path="/products/:productId/updateProduct" component={UpdateProduct}/>
        <Route exact path="/users" component={ViewUsers} />
        <Route exact path="/newUser" component={HomePage} />
        <Route exact path="/checkout" component={Checkout} />
        
              
              {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserPage} />
          </Switch>
        )}

           {/* Displays our Login component as a fallback */}
           <Route component={Login} />

        
</Switch>

      </div>
  );
}};
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me())
    }
  }
}


export default withRouter(connect(mapState, mapDispatch)(Routes))
/**
 * PROP TYPES
 */
 Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}