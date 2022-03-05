import {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,INCREASE_QTY,DECREASE_QTY} from "../actions/action"


const reducer = (state,action) =>{

    if(state==undefined){
        return {
            products:[],
            total_price:0,
            
        }
    }

    let product=action.payload.product;
    let  productid= product.id;
    // console.log(productid)
    let price=product.price;

    switch(action.type){

        case "ADD_TO_CART":
            // console.log("added to cart only if the product is not present in cart/store");
            

            if(!state.products.includes(productid)){
                
                state.products.push(productid);
                state.total_price+=price;

            }
           

         

            break;
        
        case "REMOVE_FROM_CART":

            

            if(state.products.includes(productid)){

                let idx= state.products.indexOf(productid);
                state.products.splice(idx, 1)
                
                state.total_price-=price;

            }
            break;
        
        case "CLEAR_CART":
            break;
        
        case "INCREASE_QTY":
            break;
        
        case "DECREASE_QTY":
            break;

        default:
            break;
        
        
    }

    console.log(state)
    return {...state};

}


export default reducer;


