import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk, deleteProductThunk } from "../redux/products";
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
    // console.log('this.props:',this.props)
    return (
      <div>
        <main>
          <h1>Welcome to view all Products:</h1>
        </main>

        <div>
          <AddProduct
            addNewProduct={this.props.addNewProduct} />
        </div>



        <div className='allCards' >
          {products.map((product) => (

            <div className="singleCard" key={product.id}>
              <Link to={`/products/${product.id}`}  key={product.id} >
              <img src={product.imageUrl} className="img-fluid rounded-start" alt="..." />
                <p>ProductName: {product.productName}</p>
                <p>Price:{product.price}</p>
                <p>---------------------------------</p>
              </Link>

              <button
                    type="button"
                    className="buttonDelete btn btn-danger"
                    onClick={() => this.props.deleteProduct(product.id)}
                  >
                    DELETE
                  </button>

            </div>


          ))}

        </div> 


        {/* <div className="card mb-3" >
          {products.map((product) => (
            <div className="row g-0" id="card" key={product.id}>
              <Link to={`/products/${product.id}`}  key={product.id} >
              <div className="col-md-4">
                <img src={product.imageUrl} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{product.productName}</h5>
                  <p className="card-text">{product.description}</p>
                </div>
              </div>
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

        </div> */}

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
    deleteProduct: (id) => dispatch(deleteProductThunk(id))
  };
};

export default connect(mapState, mapDispatch)(AllProducts);
