import React from "react";
import { connect } from "react-redux";
import { fetchProductsThunk } from "../redux/products";

// Notice that we're exporting the AllCampuses component twice. The named export
// (below) is not connected to Redux, while the default export (at the very
// bottom) is connected to Redux. Our tests should cover _both_ cases.
export class AllCampuses extends React.Component {
  componentDidMount(){
    this.props.loadProducts()
  }
  render() {
    // console.log('this.props:',this.props)
    return <div>hI!</div>;
  }
}

const mapState = (state) => {
  return {
    products: state.products
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadProducts:() =>dispatch(fetchProductsThunk())
  };
};

export default connect(mapState, mapDispatch)(AllCampuses);
