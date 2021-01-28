// pages/login/login.js
import {
  bind
} from "../../api/login"
import {
  setToken,
  getToken
} from "../../utils/authorization";

const app = getApp()

Page({
  data: {
    doLogining: true,
    tempToken: '',
    redirectUrl: ''
  },

  onLoad(options) {
    if (options.redirect) {
      this.setData({
        redirectUrl: options.redirect
      })
    }

    app.loginCallback = (res, error) => {
      if (error) {
        this.setData({
          doLogining: false
        })
        return;
      }

      if (res.code === 0) {
        const data = res.data || {};
        this.setData({
          tempToken: data.value
        })
        if (!data.bind || !data.value) {
          this.setData({
            doLogining: false
          })
          return;
        }
        setToken(data.value);
        this.goBack();
      }
    }
  },
  goBack:function(){
    if(this.data.redirect){
      wx.redirectTo({
        url: this.data.redirect,
      })
    }
    else{
      wx.redirectTo({
        url: '/pages/home/home',
      })
    }
  },

  getPhoneNumber(e) {
    console.log('getPhoneNumber', e);
    const options = {
      token: this.data.tempToken,
      data: '',
      iv: ''
    }
    bind(options).then((data) => {
      console.log('bind', data);
      setToken(data.value);
      this.goBack();
    }).catch((e) => {
      console.error(e);
    })
  }
})