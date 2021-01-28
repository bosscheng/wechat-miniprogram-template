import request from '../utils/request';

const _prefix = '/auth/wechat'

export function login(data) {
  return request({
    url: _prefix+'/mp',
    method: 'post',
    data
  })
}


export function bind(data){
  return request({
    url: _prefix+'/mp/bind',
    method: 'post',
    data
  })
}