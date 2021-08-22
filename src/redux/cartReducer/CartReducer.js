export const initialState = {
  cart: [],
};
const CartReducer = (state = initialState, action) => {
  // const stateHandle =(input)=>{
  //     for(i=)

  //   return{

  //   }
  // }
  switch (action.type) {
    case "Add to cart": {
      let foundItem = state.cart.find(
        (item) => item.engName === action.payload.engName
      );
      if (!foundItem) {
        foundItem = action.payload;
        foundItem.count = 1;
      } else {
        foundItem.count = foundItem.count + 1;
      }
      return {
        ...state,
        cart: [
          ...state.cart.filter(
            (item) => item.engName !== action.payload.engName
          ),
          foundItem,
        ],
        // tempArray
      };
    }

    case "delete": {
      return {
        ...state,
        cart: state.cart.filter((item) => item.engName !== action.payload.engName),
      };
    }
    case "increase": {
      let foundItem = state.cart.find(
        (item) => item.engName === action.payload.engName
      );
      foundItem.count = foundItem.count + 1;
      return {
        
        cart:state.cart
        
      };
    }
    case "decrease": {
      let foundItem = state.cart.find(
        (item) => item.engName === action.payload.engName
      );
      if(foundItem.count===1){
        return {
          ...state,
          cart: state.cart.filter((item) => item.engName !== action.payload.engName),
        };
      }else{
        foundItem.count = foundItem.count - 1;
        return {
          //...state,
          cart:state.cart
           
        };
      }
      
      
    }
    default: {
      return state;
    }
  }
};

export default CartReducer;
