import React from "react";
import { connect } from "react-redux";
import { addProductThunk } from "../redux/products";

class AddProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      productName: "",
      description: "",
      price: "",
      quantity: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.addNewProduct(this.state);
    this.setState({
      productName: "",
      description: "",
      price: "",
      quantity: "",
    });

  }
  // extract the current value from event.target.value, and set that value on state.
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div id="container1">

        <form onSubmit={this.handleSubmit} className="createProduct">

          <p>Create new Product:</p>
          <div className="name-pr">
            {/* <label className="" >Name:</label> */}
            <input
              type="text"
              name="productName"
              id="form5Example1" className="form-control-sm"
              value={this.state.productName}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </div>

          <div className="name-pr">
            {/* <label htmlFor="price">Price:</label> */}
            <input
              type="text"
              name="price"
              className="form-control-sm"
              value={this.state.price}
              onChange={this.handleChange}
              placeholder="Price"
            />
          </div>
          <div className="name-pr">
            {/* <label htmlFor="quantity">Quantity:</label> */}
            <input
              type="text"
              name="quantity"
              className="form-control-sm"
              value={this.state.quantity}
              onChange={this.handleChange}
              placeholder="Quantity"
            />
          </div>
          <div className="name-pr"> 
            {/* <label htmlFor="description">Description:</label> */}
            <input
              type="text"
              name="description"
              className="form-control-sm mb-4 "
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
            />
          </div>

          <button type="submit" id="createBtn" className="btn btn-primary btn-block ">Create product</button>
        </form>
      </div>
    );
  }
}


export default connect(null, null)(AddProduct)