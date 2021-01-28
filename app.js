// app.js
import {login} from "./api/login";

App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        if (res.code) {
          login({wechatCode:res.code}).then((data)=>{
              console.log('login',data);
          if (this.loginCallback) {
            this.loginCallback(data)
          }
          }).catch((e)=>{
            console.error('do login error',e);
            this.loginCallback(null,true);
          });
        } else {
          console.error("wx login error", res);
          this.loginCallback(null,true);
        }
      },
    })
  },
  globalData: {
    userInfo: null,
    token:''
  }
})