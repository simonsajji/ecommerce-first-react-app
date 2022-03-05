import React, { Component } from 'react';
import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,INCREASE_QTY,DECREASE_QTY} from "./actions/action"

// Here is where we need to consume from STORE redux

import {connect} from 'react-redux';

class SingleProduct extends Component {
    render() {
    
        return (
            <>
                 <div className="single-product">
                    <img src={this.props.product?.image} />
                    <p>{this.props.product?.title}</p>
                    <p>₹ {this.props.product?.price}</p>
                    {this.props.isPresent ? (
                        <button onClick={this.props.delProduct}>Remove from Cart</button>
                    ) : (
                        <button onClick={this.props.addProduct}>Add to Cart</button>
                    )}
                    
                </div>
                
            </>
        );
    }
}

const mapStateToProps=(state,orginalProps)=>{

    // Here we need to get the state from store and map it to props [GETTING THE VALUE]
    const product_id=orginalProps.product.id;
    const cart_list=state.products; // from the reducer
    
    let isPresent=false;

    if(cart_list.includes(product_id)){
        isPresent=true;
    }

    return {
        isPresent
    };

}

const mapDispatchToProps=(dispatch,orginalProps)=>{
    // Here we need to map dispactch and props [SETTING THE VALUE]

    const addProduct=()=>{

        dispatch(ADD_TO_CART(orginalProps)); // Here ADDTOCART is a function so that payload is accepted as argument as orginalProps

        // orginalProps is detail of current props of the component  

    }
    const delProduct=()=>{

        dispatch(REMOVE_FROM_CART(orginalProps));

    }
    const clearcart=()=>{

        dispatch(CLEAR_CART);

    }
    const increaseQty=()=>{

        dispatch(INCREASE_QTY);

    }
    const decreaseQty=()=>{

        dispatch(DECREASE_QTY);

    }

    return {
        addProduct,
        delProduct,
        clearcart,
        increaseQty,
        decreaseQty
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SingleProduct);