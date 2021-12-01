import React from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../redux/singleProduct";

class SingleProduct extends React.Component {
    componentDidMount() {
        this.props.loadSingleProduct(this.props.match.params.productId)
    }
    render() {
        // console.log('singleProd:', this.props.singleProduct)
        const singleProduct = this.props.singleProduct
        return (

            <div>
                <div>Single Products</div>
                <main>
                    <h1>Product</h1>
                </main>

                <img src={singleProduct.imageUrl} />
                <div className="container">
                    <h4>Product:{singleProduct.productName}</h4>
                    <p>Price:{singleProduct.price}</p>
                    <p>Description:{singleProduct.description}</p>
                    <p>Quantity:{singleProduct.quantity}</p>


                </div>

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
        loadSingleProduct: (id) => dispatch(fetchSingleCampus(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct)
