import {orderApi, handleResponse} from '../_apis'


export const orderService = {
  getList,
  getOne,
  create,
  update,
  delete: _delete
}

function getList(params){
    return orderApi
        .getList(params)
        .then( handleResponse )
        .then( response => {  
            return response;
        });
}

function getOne(id,params){
    return orderApi
        .getOne(id,params)
        .then( handleResponse )
        .then( response => {  
            return response;
        });
}

function create(data){
    return orderApi
        .create(data)
        .then( handleResponse )
        .then( response => {  
            return response;
        });
}

function update(id,data){
    return orderApi
        .update(id,data)
        .then( handleResponse )
        .then( response => {  
            return response;
        });
}

function _delete(id){
    return orderApi
        .delete(id)
        .then( handleResponse )
        .then( response => {
            // 암호 변경 결과가 성공이면 Empty Object가 반환되므로,
            // 다른 처리를 할 것은 없다.
            return response;
        });
}