import promisify from "./promisify";
import {getToken} from './authorization';
const baseUrl = 'http://example.com';
const apiPath = '';
const url = baseUrl + apiPath;

export default promisify((options) => {
  if (options.method) {
    options.method = ('' + options.method).toUpperCase()
  }

  const preDataType = options.dataType;

  // 默认的请求参数
  const defaultOptions = {
    dataType: 'json'
  };

  options.header = options.header || {};

  const _token = getToken();
  if (_token) {
    options.header['Authorization'] = _token;
  }
  // 先提前把方法 取出来。
  const {
    success,
    fail,
    complete
  } = options;

  options.url = url + options.url;


  const handleSuccess = (data, statusCode, header) => {
    success && success(data.data)
    complete && complete(data.data)
  }

  const handleFail = (error) => {
    fail && fail(error)
    complete && complete(error)
  }

  return wx.request(Object.assign({}, defaultOptions, options, {
    success: handleSuccess,
    fail: handleFail,
    complete: () => {}
  }))
})
