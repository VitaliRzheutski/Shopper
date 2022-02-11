import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Popup from "./PopUp";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const order = this.props.order;
    if (this.props.order[0] === undefined) {
      return <div>You don't have items to checout</div>;
    } else {
      const products = this.props.order[0].products;
      const sum = products.reduce((accum, curElement) => {
        const quantity = curElement.orderDetail.quantity;
        return (accum = accum + quantity);
      }, 0);

      let priceSum = products.reduce((accum, curElement) => {
        const price = curElement.orderDetail.productPrice;
        const quantity = curElement.orderDetail.quantity;
        return accum + price * quantity;
      }, 0);
      return (
        <div className="container mt-5 px-5">
          <div className="mb-4">
            <h2>Confirm order and pay</h2>{" "}
            <span>
              please make the payment, after that you can enjoy all the features
              and benefits.
            </span>
          </div>
          <div className="row">
            <div className="col-md-8">
              <div className="card p-3">
                <h6 className="text-uppercase">Payment details</h6>
                <div className="inputbox mt-3">
                  {" "}
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required="required"
                  />{" "}
                  <span>Name on card</span>{" "}
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="inputbox mt-3 mr-2">
                      {" "}
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        required="required"
                      />{" "}
                      <i className="fa fa-credit-card"></i>{" "}
                      <span>Card Number</span>{" "}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="d-flex flex-row">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Expiry</span>{" "}
                      </div>
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>CVV</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 mb-4">
                  <h6 className="text-uppercase">Billing Address</h6>
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Street Address</span>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>City</span>{" "}
                      </div>
                    </div>
                  </div>
                  <div className="row mt-2">
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>State/Province</span>{" "}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="inputbox mt-3 mr-2">
                        {" "}
                        <input
                          type="text"
                          name="name"
                          className="form-control"
                          required="required"
                        />{" "}
                        <span>Zip code</span>{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 mb-4 d-flex justify-content-between">
                <Link to="/cart">
                  <span>Previous step</span>
                </Link>
                <Popup />
              </div>
            </div>

            <div className="col-md-4">
              <div className="card card-blue p-3 text-white mb-3">
                {" "}
                <span>You have to pay</span>
                <div className="d-flex flex-row align-items-end mb-3">
                  <h1 className="mb-0 yellow">${priceSum.toFixed(2)}</h1>
                </div>
                <p id="textP">
                  Enjoy all the products after you complete the payment
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}
const mapState = (state) => {
  return {
    order: state.cart,
  };
};

export default connect(mapState, null)(Checkout);
