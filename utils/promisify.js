/*
 * @desc 针对于微信的 api 接口做 promise 化处理，resolve 对应的是 success ,reject 对应的是 reject 。忽略掉了complete 方法
 *
 * */
export default api => {
  return (options, ...params) => {
    return new Promise((resolve, reject) => {
      api(Object.assign({}, options, { success: resolve, fail: reject }), ...params)
    })
  }
}