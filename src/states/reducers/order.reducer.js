import { orderConstants } from "../_constants";


export function order(state = {}, action){
    switch(action.type){
        case orderConstants.GET_LIST_REQUEST:
            return {
                loading: true,
            };
        case orderConstants.GET_LIST_SUCCESS:
            return {
                items: action.items.orders
            };
        case orderConstants.GET_LIST_FAILURE:
            return {
                error: action.error,
            };
        case orderConstants.GET_ONE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case orderConstants.GET_ONE_SUCCESS:
            return {
                items: state.items,
                item: action.item
            };
        case orderConstants.GET_ONE_FAILURE:
            return {
                items: state.items,
                error: action.error
            };
        case orderConstants.CREATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case orderConstants.CREATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true,
            };
        case orderConstants.CREATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case orderConstants.UPDATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case orderConstants.UPDATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true
            };
        case orderConstants.UPDATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case orderConstants.DELETE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case orderConstants.DELETE_SUCCESS:
            return {
                reloading: true,
            };
        case orderConstants.DELETE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        default:
            return state;
    }
}