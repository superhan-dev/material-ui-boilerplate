import { combineReducers } from 'redux';

// import { registration } from './registration.reducer';
import { auth } from './auth.reducer';
import { customer } from './customer.reducer';
import { order } from './order.reducer';
import { product } from './product.reducer';


const rootReducer = combineReducers({
    // registration,
    auth,
    customer,
    order,
    product,
});

export default rootReducer;