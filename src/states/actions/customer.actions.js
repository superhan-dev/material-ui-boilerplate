import { customerConstants } from "../_constants";
import { customerService } from "../_services";
import { alertActions } from ".";

export const customerActions = {
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

        customerService.getList(params)
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

    function request() { return { type: customerConstants.GET_LIST_REQUEST } }
    function success(items) { return { type: customerConstants.GET_LIST_SUCCESS, items } }
    function failure(error) { return { type: customerConstants.GET_LIST_FAILURE, error } }
}

function getOne(id,params) {
    return dispatch => {
        dispatch(request());

        customerService.getOne(id,params)
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

    function request() { return { type: customerConstants.GET_ONE_REQUEST } }
    function success(item) { return { type: customerConstants.GET_ONE_SUCCESS, item } }
    function failure(error) { return { type: customerConstants.GET_ONE_FAILURE, error } }
}


function updateMainCctv(id) {
    return dispatch => {
        dispatch(request());

        customerService.updateMainCctv(id)
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

    function request() { return { type: customerConstants.UPDATE_MAIN_CCTV_REQUEST } }
    function success(item) { return { type: customerConstants.UPDATE_MAIN_CCTV_SUCCESS, item } }
    function failure(error) { return { type: customerConstants.UPDATE_MAIN_CCTV_FAILURE, error } }
}

function create(data) {
    return dispatch => {
        dispatch(request());

        customerService.create(data)
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

    function request() { return { type: customerConstants.CREATE_REQUEST } }
    function success(item) { return { type: customerConstants.CREATE_SUCCESS, item } }
    function failure(error) { return { type: customerConstants.CREATE_FAILURE, error } }
}

function update(id,data) {
    return dispatch => {
        dispatch(request());

        customerService.update(id,data)
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

    function request() { return { type: customerConstants.UPDATE_REQUEST } }
    function success(item) { return { type: customerConstants.UPDATE_SUCCESS, item } }
    function failure(error) { return { type: customerConstants.UPDATE_FAILURE, error } }
}

function _delete(id) {
    return dispatch => {
        dispatch(request());

        customerService.delete(id)
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

    function request() { return { type: customerConstants.DELETE_REQUEST } }
    function success(result) { return { type: customerConstants.DELETE_SUCCESS, result } }
    function failure(error) { return { type: customerConstants.DELETE_FAILURE, error } }
}