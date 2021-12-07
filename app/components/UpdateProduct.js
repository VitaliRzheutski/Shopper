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
        // console.log("props grpm UPDATE:", this.props);
        // console.log('this.state:', this.state)
        return (
            // <div>kyky</div>
              <div id="container">
                <div id="navbar">Update Product:</div>

                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="productName">Name:</label>
                  <input
                    type="text"
                    name="productName"
                    value={this.state.productName}
                    onChange={this.handleChange}
                  />

                  <label htmlFor="description">Description:</label>
                  <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                  />

                    <label htmlFor="price">Price:</label>
                  <input
                    type="text"
                    name="price"
                    value={this.state.price}
                    onChange={this.handleChange}
                  />

                    <label htmlFor="quantity">Quantity:</label>
                  <input
                    type="text"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.handleChange}
                  />

                  <button type="submit">Update Product</button>
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
        updateProduct: (id, productName,description,price,quantity) => dispatch(updateProductThunk(id,productName,description,price,quantity))
    }
}
export default connect(mapState, mapDispatch)(UpdateProduct)