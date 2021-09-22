import { apiConstants } from "../_constants/api.constants";
import BaseApi from "./base.api";

export const orderApi = {
  getList,
  getOne,
  create,
  update,
  delete: _delete
}

function getList(params){
  // let params = {
  //   page: page, // 조회할 페이지 번호
  //   size: PAGE_SIZE,      // 한페이지에 가져올 아이템 개수
  //   sort: SORT,           // 데이터 정렬
  //   search: search
  // };
  return BaseApi.get(`${apiConstants.ORDER}`, {params: params});
}


function getOne(id,params){
  return BaseApi.get(`${apiConstants.ORDER}/${id}`, {params: params});
}

function create(data){
  return BaseApi.post(`${apiConstants.ORDER}`, data);
}

function update(id,data){
  return BaseApi.patch(`${apiConstants.ORDER}/${id}`, data);
}

function _delete(id){
  return BaseApi.delete(`${apiConstants.ORDER}/${id}`);
}