import React from 'react'
import { connect } from 'react-redux'
import { deleteProductFromCartThunk, getCartThunk } from '../redux/cart'


class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.getProducts = this.getProducts.bind(this)
    }

    componentDidMount() {
        this.props.loadCart()
    }


    getProducts(productArray) {
        console.log('productArray:', productArray)
        console.log('props from Cart:', this.props)
        return (
            <section className="pt-5 pb-5" >
                <div className="container" >
                    <div className="row w-100">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                            <p className="mb-5 text-center">
                                <i className="text-info font-weight-bold">{productArray.length}</i> items in your cart</p>
                            <table id="shoppingCart" className="table table-condensed table-responsive">

                                <tbody>
                                    {productArray.map(product => {
                                        return (
                                            <tr key={product.id}>
                                                {/* {this.state.countTotalPrice(product.price)} */}
                                                <td data-th="Product">
                                                    <div className="row">
                                                        <div className="col-md-3 text-left">
                                                            <img src={product.imageUrl} alt="" className="img-fluid d-none d-md-block rounded mb-2 shadow  " />
                                                        </div>
                                                        <div className="col-md-9 text-left mt-sm-2">
                                                            <h4>{product.productName}</h4>
                                                            <p className="font-weight-light">{product.description}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td data-th="Price">Price:{product.price}</td>
                                                <td data-th="Quantity">
                                                    <input type="number" className="form-control form-control-lg text-center" defaultValue={'1'} />
                                                </td>
                                                <td className="actions" data-th="">
                                                    <div className="text-right">
                                                        {/* <button className="btn btn-white border-secondary bg-white btn-md mb-2">
                                                            <i className="fas fa-sync"></i>Hey
                                                        </button> */}
                                                        <button className="btn btn-white border-secondary bg-white btn-md mb-2" onClick={() => { this.props.deleteProductFromCart(product.id) }}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>
                                        )

                                    })}


                                </tbody>


                            </table>
                            {/* <div className="float-right text-right">
                                <h4>Subtotal:</h4>
                                <h1>444</h1> */}
                            {/* <h1>{this.state.totalPrice}</h1> */}
                            {/* </div> */}
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                    </div>
                </div>
            </section>


        )
    }
    render() {
        const order = this.props.order //array with obj

        if (this.props.order[0] === undefined) {
            return <div>You don't have any items in your cart yet!</div>
        } else {
            const products = this.props.order[0].products;

            const priceSum = products.reduce((accum, curElement) => {
                const price = curElement.orderDetail.productPrice
                return accum + price
            }, 0)
            console.log('products:', products)
            return (
                // <div>
                //     <div>{this.getProducts(products)}</div>
                // </div>
                <div className="has-text-centered">
                    <table className="table">
                        {this.getProducts(products)}

                        <div className="level-right has-text-weight-semibold">
                            {/* <td className="level-item"> */}
                                <br />
                                Total order price: ${(priceSum).toFixed(2)}
                            {/* </td> */}
                        </div>
                    </table>
                </div>
            )
        }
    }
}
const mapSate = (state) => {
    // console.log('!state!', state)
    return {
        order: state.cart
    }
}
const mapDispatch = (dispatch) => {
    return {
        loadCart: () => dispatch(getCartThunk()),
        deleteProductFromCart: (productId) => dispatch(deleteProductFromCartThunk(productId))
    }
}

export default connect(mapSate, mapDispatch)(Cart)
