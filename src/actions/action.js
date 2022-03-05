// ACTIONS to manipulate states in STORE with the help of REDUCERS



//1. Add to cart object/action
//2. Remove from cart object/action
//3. Increase the quantity / decrease quantity actions
// 4. Clear cart


const ADD_TO_CART= (payload)=>{

    return{
        type:"ADD_TO_CART",
        payload,

    }
    
}

const REMOVE_FROM_CART= (payload)=>{
    return {
        type:"REMOVE_FROM_CART",
        payload

    }

   
}
const CLEAR_CART={
    type:"CLEAR_CART"
}
const INCREASE_QTY={
    type:"INCREASE_QTY"
}
const DECREASE_QTY={
    type:"DECREASE_QTY"
}


export {ADD_TO_CART,REMOVE_FROM_CART,CLEAR_CART,INCREASE_QTY,DECREASE_QTY} 
