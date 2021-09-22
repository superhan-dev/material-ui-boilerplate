import { productConstants } from "../_constants";


export function product(state = {}, action){
    switch(action.type){
        case productConstants.GET_LIST_REQUEST:
            return {
                loading: true,
            };
        case productConstants.GET_LIST_SUCCESS:
            return {
                items: action.items.products
            };
        case productConstants.GET_LIST_FAILURE:
            return {
                error: action.error,
            };
        case productConstants.GET_ONE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case productConstants.GET_ONE_SUCCESS:
            return {
                items: state.items,
                item: action.item
            };
        case productConstants.GET_ONE_FAILURE:
            return {
                items: state.items,
                error: action.error
            };
        case productConstants.CREATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case productConstants.CREATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true,
            };
        case productConstants.CREATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case productConstants.UPDATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case productConstants.UPDATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true
            };
        case productConstants.UPDATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case productConstants.DELETE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case productConstants.DELETE_SUCCESS:
            return {
                reloading: true,
            };
        case productConstants.DELETE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        default:
            return state;
    }
}