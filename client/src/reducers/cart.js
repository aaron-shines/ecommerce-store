import { ADD_TO_CART, REMOVE_FROM_CART} from '../actions/types';

const INITIAL_STATE = [

];

export default function(state = INITIAL_STATE, action){

    switch(action.type){
        case ADD_TO_CART:{

            const {item} = action.payload;
            let cart = [...state,item];
            localStorage.setItem("cart", JSON.stringify(cart));

            return [
                ...state,
                item

            ];

        }
        case REMOVE_FROM_CART:{

            const {index} = action.payload;
            console.log("my index",index);
            let cart = JSON.parse(localStorage.getItem('cart'));
            let filteredCart = cart.slice();
            filteredCart.splice(index, 1);

            // cart = cart.filter( item => {
            //     return item.product_id !== id;
            // });

            console.log("filteredCart",filteredCart);
            localStorage.setItem('cart', JSON.stringify(filteredCart));
            console.log("in",INITIAL_STATE);
            return [
                filteredCart
            ];

        }
        default:
            return state;
    }

}