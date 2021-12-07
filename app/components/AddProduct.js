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

        // console.log("this.props from AddProduct:", this.props);
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
          <div id="container1">
            
            <form onSubmit={this.handleSubmit}>
            <div id="navbar">Create new Product:</div>
              <label className="form-label" >Name:</label>
              <input
                type="text"
                name="productName"
                id="form5Example1" className="form-control"
                value={this.state.productName}
                onChange={this.handleChange}
              />
    
              

              <label htmlFor="price">Price:</label>
              <input
                type="text"
                name="price"
                 className="form-control"
                value={this.state.price}
                onChange={this.handleChange}
              />

               <label htmlFor="quantity">Quantity:</label>
              <input
                type="text"
                name="quantity"
                 className="form-control"
                value={this.state.quantity}
                onChange={this.handleChange}
              />

              <label htmlFor="description">Description:</label>
              <input
                type="text"
                name="description"
               className="form-control mb-4 "
                value={this.state.description}
                onChange={this.handleChange}
              />
    
              <button type="submit" id="createBtn" className="btn btn-primary btn-block ">Create product</button>
            </form>
          </div>
        );
      }
    }


export default connect(null,null)(AddProduct)