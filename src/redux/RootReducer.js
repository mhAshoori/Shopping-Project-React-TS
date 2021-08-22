import {combineReducers} from 'redux'

import CartReducer from './cartReducer/CartReducer'
import UserReducer from './userReducer/UserReducer'
const RootReducer =combineReducers({
    cart:CartReducer,
    user:UserReducer
})

export default RootReducer