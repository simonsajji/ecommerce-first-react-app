import React, { Component } from 'react';
import cart from "./images/cart.png";
import { connect } from 'react-redux';

class Header extends Component {

    
    render() {
       
        return (
            <div className="Header ">

                <div className="logo">
                    Shopify
                </div>

                

                
                
                <div className="icons">
                    <div>HOME</div>
                    <div>PRODUCTS</div>
                    <div>About</div>
                    <div>SUPPORT</div>
                </div>
                <div className="search"><input type="text"/></div>
                <div className="total"> <span>Total Price</span> <span className="price">₹{this.props.tot_price}</span></div>
                <div className="cart"><img src={cart} /></div>
                
            </div>
        );
    }
}

const mapStateToProps = (state, orginalProps)=>{
    let tot_price=10;
    const real_price=state.total_price;
    tot_price=real_price;

    return {
        tot_price,
    }
    
}
const mapDispatchToProps = (dispatch,orginalProps)=>{

    // We are not updating the state in store so we dont necessaerily need mapDispatch

}

export default connect(mapStateToProps,mapDispatchToProps)(Header);