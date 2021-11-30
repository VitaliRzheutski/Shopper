import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk } from "../redux/products";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
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
        <div className="container">
          {products.map((product) => {
            console.log('product:', product);
            return (
              <div className="singleProduct" >
                <p>ProductName: {product.productName}</p>
                <p>Description:{product.description}</p>
                <p>---------------------</p>
              </div>
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

export default connect(mapState, mapDispatch)(AllCampuses);
