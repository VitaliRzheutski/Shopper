import React from "react";
import { connect } from "react-redux";
import { fetchSingleProduct } from "../redux/singleProduct";
import { Link } from "react-router-dom";
class SingleProduct extends React.Component {
    componentDidMount() {
        this.props.loadSingleProduct(this.props.match.params.productId)
    }
    render() {
        // console.log('props form singleProduct:', this.props)
        const singleProduct = this.props.singleProduct
        return (

            //     <div >
            //         <div>Single Products</div>
            //         <main>
            //             <h1>Product</h1>
            //         </main>

            //         <img src={singleProduct.imageUrl} />
            //         <div className="container"  >
            //             <h4>Product:{singleProduct.productName}</h4>
            //             <p>Price:{singleProduct.price}</p>
            //             <p>Description:{singleProduct.description}</p>
            //             <p>Quantity:{singleProduct.quantity}</p>


            //         </div>
            //         <Link to={`/products/${singleProduct.id}/updateProduct`} className="link">
            //   <button
            //     type="button"
            //     className="updateStudent"

            //   >
            //     Edit campus
            //   </button>
            // </Link>
            //     </div>

            <div className="singleProd">

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div id="container">

                    <div className="product-details">

                        <h1>{singleProduct.productName}</h1>
                        {/* stars may be will use */}
                        {/* <span class="hint-star star">
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star" aria-hidden="true"></i>
                            <i class="fa fa-star-o" aria-hidden="true"></i>
                        </span> */}

                        <p className="information">{singleProduct.description}</p>



                        <div className="control">

                            <button className="btn">
                                <span className="price">${singleProduct.price}</span>
                                <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i></span>
                                <span className="buy">Get now</span>
                            </button>

                        </div>

                    </div>

                    <div className="product-image">

                        <img src={singleProduct.imageUrl} alt="" />
                    </div>


                </div>
                <Link to={`/products/${singleProduct.id}/updateProduct`} className="link">
              <button
                type="button"
                className="updateProduct btn btn-primary btn-block"

              >
                Edit product
              </button>
             </Link>
            </div>


        )
    }
}
const mapStateToProps = (state) => {
    return {
        singleProduct: state.product
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        loadSingleProduct: (id) => dispatch(fetchSingleProduct(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
