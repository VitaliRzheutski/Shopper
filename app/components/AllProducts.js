import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk, deleteProductThunk } from "../redux/products";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import { addProductThunk } from "../redux/products";

export class AllProducts extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const isAdmin = this.props.user.isAdmin;
    const products = this.props.products;
    console.log('products:', products)
    return (
      <div>
        <main>
          <h1>Welcome to view all Products:</h1>
        </main>
        {!!isAdmin && (
          <div>
            <AddProduct
              addNewProduct={this.props.addNewProduct} />
          </div>
        )}
        <div className='allCards' >
          {products.map(product => (
            product !== undefined ?
              <div className="singleCard" key={product.id}>
                <Link to={`/products/${product.id}`} >
                  <img src={product.imageUrl} />
                  <p id="product-name-text"> {product.productName}</p>
                  <p id="product-price-text">Price: ${product.price}</p>
                </Link>
                {!!isAdmin && (
                  <button
                    type="button"
                    className="buttonDelete btn btn-danger"
                    onClick={() => this.props.deleteProduct(product.id)}
                  >
                    DELETE
                  </button>
                )}

              </div>
              : null
          ))}

        </div>
      </div>
    );
  }
}
const mapState = (state) => {
  return {
    products: state.products,
    user: state.user


  };
};
const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsThunk()),
    addNewProduct: (product) => dispatch(addProductThunk(product)),
    deleteProduct: (id) => dispatch(deleteProductThunk(id))
  };
};
export default connect(mapState, mapDispatch)(AllProducts);
