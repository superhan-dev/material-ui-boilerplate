import { customerConstants } from "../_constants";


export function customer(state = {}, action){
    switch(action.type){
        case customerConstants.GET_LIST_REQUEST:
            return {
                loading: true,
            };
        case customerConstants.GET_LIST_SUCCESS:
            return {
                items: action.items.customers
            };
        case customerConstants.GET_LIST_FAILURE:
            return {
                error: action.error,
            };
        case customerConstants.GET_ONE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case customerConstants.GET_ONE_SUCCESS:
            return {
                items: state.items,
                item: action.item
            };
        case customerConstants.GET_ONE_FAILURE:
            return {
                items: state.items,
                error: action.error
            };
        case customerConstants.CREATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case customerConstants.CREATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true,
            };
        case customerConstants.CREATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case customerConstants.UPDATE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case customerConstants.UPDATE_SUCCESS:
            return {
                // item: action.item,
                reloading: true
            };
        case customerConstants.UPDATE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        case customerConstants.DELETE_REQUEST:
            return {
                items: state.items,
                loading: true,
            };
        case customerConstants.DELETE_SUCCESS:
            return {
                reloading: true,
            };
        case customerConstants.DELETE_FAILURE:
            return {
                items: state.items,
                error: action.error,
            };
        default:
            return state;
    }
}