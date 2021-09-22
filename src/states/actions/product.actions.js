import { productConstants } from "../_constants";
import { productService } from "../_services";
import { alertActions } from ".";

export const productActions = {
  getList,
  getOne,
  create,
  update,
  delete: _delete,
  updateMainCctv
};

function getList(params) {
    return dispatch => {
        dispatch(request());

        productService.getList(params)
            .then(
              items => {
                    dispatch(success(items));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.GET_LIST_REQUEST } }
    function success(items) { return { type: productConstants.GET_LIST_SUCCESS, items } }
    function failure(error) { return { type: productConstants.GET_LIST_FAILURE, error } }
}

function getOne(id,params) {
    return dispatch => {
        dispatch(request());

        productService.getOne(id,params)
            .then(
              item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.GET_ONE_REQUEST } }
    function success(item) { return { type: productConstants.GET_ONE_SUCCESS, item } }
    function failure(error) { return { type: productConstants.GET_ONE_FAILURE, error } }
}


function updateMainCctv(id) {
    return dispatch => {
        dispatch(request());

        productService.updateMainCctv(id)
            .then(
              item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.UPDATE_MAIN_CCTV_REQUEST } }
    function success(item) { return { type: productConstants.UPDATE_MAIN_CCTV_SUCCESS, item } }
    function failure(error) { return { type: productConstants.UPDATE_MAIN_CCTV_FAILURE, error } }
}

function create(data) {
    return dispatch => {
        dispatch(request());

        productService.create(data)
            .then(
              item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.CREATE_REQUEST } }
    function success(item) { return { type: productConstants.CREATE_SUCCESS, item } }
    function failure(error) { return { type: productConstants.CREATE_FAILURE, error } }
}

function update(id,data) {
    return dispatch => {
        dispatch(request());

        productService.update(id,data)
            .then(
              item => {
                    dispatch(success(item));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.UPDATE_REQUEST } }
    function success(item) { return { type: productConstants.UPDATE_SUCCESS, item } }
    function failure(error) { return { type: productConstants.UPDATE_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request());

        productService.delete(id)
            .then(
                result => {
                    dispatch(success(result));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: productConstants.DELETE_REQUEST } }
    function success(result) { return { type: productConstants.DELETE_SUCCESS, result } }
    function failure(error) { return { type: productConstants.DELETE_FAILURE, error } }
}