import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk,deleteProductThunk } from "../redux/products";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import { addProductThunk } from "../redux/products";


export class AllProducts extends React.Component {
  componentDidMount() {
    this.props.loadProducts()
  }
  render() {
    const products = this.props.products;
    // console.log('products:', products)
    console.log('this.props:',this.props)
    return (
      <div>
        <main>
          <h1>Welcome to view all Products:</h1>
        </main>

        <div>
          <AddProduct
            // products={this.props.products}
            addNewProduct={this.props.addNewProduct} />
        </div>



        <div className='container' >
          {products.map((product) => (

            <div className="" key={product.id}>
              <Link to={`/products/${product.id}`}  key={product.id} >


                <p>ProductName: {product.productName}</p>
                <p>Description:{product.description}</p>
                <p>---------------------------------</p>


              </Link>
              <button
                    type="button"
                    className="button btn btn-danger"
                    onClick={() => this.props.deleteProduct(product.id)}
                  >
                    DELETE
                  </button>

            </div>


          ))}

        </div>

      </div>

    );
  }
}

const mapState = (state) => {
  return {
    products: state.products,


  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts: () => dispatch(fetchProductsThunk()),
    addNewProduct: (product) => dispatch(addProductThunk(product)),
    deleteProduct:(id) =>dispatch(deleteProductThunk(id))
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
