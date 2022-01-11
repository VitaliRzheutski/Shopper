import React from 'react'
import { connect } from 'react-redux'
import { getCartThunk } from '../redux/cart'


class Cart extends React.Component {
    componentDidMount(){
        this.props.loadCart()
    }
    render() {
        console.log('this.props:!',this.props)
        return (
         
                <h1> My Cart </h1>
          
        )

    }
}
const mapSate = (state) =>{
    console.log('state!!!:',state.cart)
    return{
        order:state.cart
    }
}
const mapDispatch = (dispatch) => {
    return {
        loadCart:()=> dispatch(getCartThunk())
    }
}

export default connect(mapSate,mapDispatch)(Cart)
