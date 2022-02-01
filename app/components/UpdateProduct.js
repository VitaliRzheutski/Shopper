import React from 'react';
import { updateProductThunk } from '../redux/products';
import { connect } from 'react-redux';

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      description: "",
      price: "",
      quantity: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.updateProduct(this.props.product.id, this.state);
    this.setState({
      productName: "",
      description: "",
      price: "",
      quantity: ""
    });
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div id="container1">
        <div id="updateprod">Update Product:</div>

        <form onSubmit={this.handleSubmit} className="createProduct">
          <div className="name-pr">
            <input
              type="text"
              name="productName"
              className="form-control-sm"
              value={this.state.productName}
              onChange={this.handleChange}
              placeholder="Name"
            />
          </div>

          <div className="name-pr">
            <input
              type="text"
              name="description"
              className="form-control-sm"
              value={this.state.description}
              onChange={this.handleChange}
              placeholder="Description"
            />
          </div>

          <div className="name-pr">
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
            <input
              type="text"
              name="quantity"
              className="form-control-sm"
              value={this.state.quantity}
              onChange={this.handleChange}
              placeholder="Quantity"
            />
          </div>

          <button type="submit" id="createBtn" className="btn btn-primary btn-block " >Update Product</button>
        </form>

      </div>
    );
  }
}

const mapState = (state) => {
  return {
    product: state.product
  }
}
const mapDispatch = (dispatch) => {
  return {
    updateProduct: (id, productName, description, price, quantity) => dispatch(updateProductThunk(id, productName, description, price, quantity))
  }
}
export default connect(mapState, mapDispatch)(UpdateProduct)