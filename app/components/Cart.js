import React from 'react'
import { connect } from 'react-redux'
import { decreaseProductThunk, deleteProductFromCartThunk, getCartThunk, incrementCountThunk } from '../redux/cart'
import { Link } from 'react-router-dom'




class Cart extends React.Component {
    constructor(props) {
        super(props)

        this.getProducts = this.getProducts.bind(this)
    }
    componentDidMount() {
        this.props.loadCart()
    }

    getProducts(productArray) {
        console.log('props from cart:', this.props)
        return (
            <section className="pt-5 pb-5" >
                <div className="container" >
                    <div className="row w-100">
                        <div className="col-lg-12 col-md-12 col-12">
                            <h3>Shopping Cart</h3>

                            <table id="shoppingCart" className="table table-condensed table-responsive">

                                <tbody>
                                    {productArray.map(product => {
                                        return (
                                            <tr key={product.id}>
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
                                                <td data-th="Price">Price: ${product.price}</td>
                                                <td>
                                                    <button className='decrease' onClick={() => this.props.decreaseProduct(product.id)}>-</button>
                                                    {product.orderDetail.quantity}
                                                    <button className='increase' onClick={() => this.props.incrementProduct(product.id)}>+</button>
                                                </td>

                                                <td className="actions" data-th="">
                                                    <div className="text-right">
                                                        <button className=" btn btn-white border-secondary bg-white btn-md mb3 " onClick={() => { this.props.deleteProductFromCart(product.id) }}>
                                                            Remove
                                                        </button>
                                                    </div>
                                                </td>
                                            </tr>

                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="row mt-4 d-flex align-items-center">
                    </div>
                </div>
            </section>
        )
    }
    render() {
        const order = this.props.order;
        console.log('order from cart:',order)

        if (this.props.order[0] === undefined) {
            return <div>You don't have any items in your cart yet!</div>
        } else {
            const products = this.props.order[0].products;
            const sum = products.reduce((accum, curElement) => {
                const quantity = curElement.orderDetail.quantity
                return (accum = accum + quantity)
            }, 0)

            const priceSum = products.reduce((accum, curElement) => {
                const price = curElement.orderDetail.productPrice;
                const quantity = curElement.orderDetail.quantity;
                return accum + (price * quantity)
            }, 0)
            console.log('products:', products)
            return (
                <div className="total-quantity">
                    {this.getProducts(products)}
                    <p>Total order quantity: {sum}</p>
                    <div className='pr'>
                        <p> Total order price: ${(priceSum).toFixed(2)}</p>
                        <Link to="/checkout" >
                            Chekout
                        </Link>
                    </div>
                </div>

            )
        }
    }
}
const mapSate = (state) => {
    return {
        order: state.cart
    }
}
const mapDispatch = (dispatch) => {
    return {
        loadCart: () => dispatch(getCartThunk()),
        deleteProductFromCart: (productId) => dispatch(deleteProductFromCartThunk(productId)),
        decreaseProduct: (productId) => dispatch(decreaseProductThunk(productId)),
        incrementProduct: (productId) => dispatch(incrementCountThunk(productId))
    }
}

export default connect(mapSate, mapDispatch)(Cart)
