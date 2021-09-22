import { orderConstants } from "../_constants";
import { orderService } from "../_services";
import { alertActions } from ".";

export const orderActions = {
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

        orderService.getList(params)
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

    function request() { return { type: orderConstants.GET_LIST_REQUEST } }
    function success(items) { return { type: orderConstants.GET_LIST_SUCCESS, items } }
    function failure(error) { return { type: orderConstants.GET_LIST_FAILURE, error } }
}

function getOne(id,params) {
    return dispatch => {
        dispatch(request());

        orderService.getOne(id,params)
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

    function request() { return { type: orderConstants.GET_ONE_REQUEST } }
    function success(item) { return { type: orderConstants.GET_ONE_SUCCESS, item } }
    function failure(error) { return { type: orderConstants.GET_ONE_FAILURE, error } }
}


function updateMainCctv(id) {
    return dispatch => {
        dispatch(request());

        orderService.updateMainCctv(id)
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

    function request() { return { type: orderConstants.UPDATE_MAIN_CCTV_REQUEST } }
    function success(item) { return { type: orderConstants.UPDATE_MAIN_CCTV_SUCCESS, item } }
    function failure(error) { return { type: orderConstants.UPDATE_MAIN_CCTV_FAILURE, error } }
}

function create(data) {
    return dispatch => {
        dispatch(request());

        orderService.create(data)
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

    function request() { return { type: orderConstants.CREATE_REQUEST } }
    function success(item) { return { type: orderConstants.CREATE_SUCCESS, item } }
    function failure(error) { return { type: orderConstants.CREATE_FAILURE, error } }
}

function update(id,data) {
    return dispatch => {
        dispatch(request());

        orderService.update(id,data)
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

    function request() { return { type: orderConstants.UPDATE_REQUEST } }
    function success(item) { return { type: orderConstants.UPDATE_SUCCESS, item } }
    function failure(error) { return { type: orderConstants.UPDATE_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request());

        orderService.delete(id)
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

    function request() { return { type: orderConstants.DELETE_REQUEST } }
    function success(result) { return { type: orderConstants.DELETE_SUCCESS, result } }
    function failure(error) { return { type: orderConstants.DELETE_FAILURE, error } }
}