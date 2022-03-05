import React, { Component } from 'react';
import SingleProduct from './SingleProduct.js';

class Products extends Component {
    render() {
        // console.log(this.props.items)
        return (
            <div className="Product-box">

                {this.props.items.map((singleitem,idx)=>{

                    return(

                        <SingleProduct product={singleitem} key={idx}/>
                        )

                    

                })}
                

               


                
            </div>
        );
    }
}

export default Products;