import React from "react";
import { connect } from "react-redux";
import {addProductThunk } from "../redux/products";

 class AddProduct extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            productName: "",
            description: "",
            price:"",
            quantity:"",
          };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

        console.log("this.props from AddProduct:", this.props);
    }
    handleSubmit(event) {
        event.preventDefault();
        this.props.addNewProduct(this.state);
        this.setState({
          productName: "",
          description: "",
          price: "",
          quantity:"",
        });
        
      }
      // extract the current value from event.target.value, and set that value on state.
      handleChange(event) {
        this.setState({
          [event.target.name]: event.target.value,
        });
      }
   
    render() {
        // console.log("this.props from ADDCAMPUS:", this.props);
        return (
          <div id="container">
            <div id="navbar">Create new Product:</div>
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
    
              <button type="submit">Create</button>
            </form>
          </div>
        );
      }
    }

// const mapState = (state)=>{
//     return{
//         products:state.products
//     }
// }
// const mapDispatch  = (dispatch) =>{
//     return{
//         addNewProduct:(product) => dispatch(addProductThunk(product))
//     }
// }
export default connect(null,null)(AddProduct)