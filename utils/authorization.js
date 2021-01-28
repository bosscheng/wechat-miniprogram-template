const TOKEN_KEY = '_token';
const TIME_KEY = '_time';
let _time = wx.getStorageSync(TIME_KEY);
let now = (new Date()).getTime();

// 存储 24h
if (_time && now - _time > 24 * 3600 * 1000) {
  wx.removeStorageSync(TOKEN_KEY);
  wx.removeStorageSync(TIME_KEY);
}

let _token = wx.getStorageSync(TOKEN_KEY);

export function getToken() {
  return _token;
}

export function setToken(value) {
  _token = 'Bearer ' + value;
  wx.setStorageSync(TOKEN_KEY, _token);
  wx.setStorageSync(TIME_KEY, (new Date()).getTime());
}