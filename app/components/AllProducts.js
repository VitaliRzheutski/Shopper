import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk } from "../redux/products";
import { Link } from "react-router-dom";


export class AllCampuses extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const products = this.props.products;
    return (
      <div>
        <main>
          <h1>Welcome to view all Products:</h1>
        </main>
        <div className="container" >
          {products.map((product) => {
            // console.log('product:', product);
            return (
              <Link to={`/products/${product.id}`} key={product.id} >
                <div className="singleProduct" key={product.id} >
                  <p>ProductName: {product.productName}</p>
                  <p>Description:{product.description}</p>
                  <p>---------------------------------</p>
                </div>
              </Link>
            )

          })}

        </div>



      </div>
    );
  }
}

const mapState = (state) => {
  return {
    products: state.products
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsThunk())
  };
};
// console.log("H")

export default connect(mapState, mapDispatch)(AllCampuses);
