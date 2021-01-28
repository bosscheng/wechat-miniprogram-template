// pages/home/home.js
const app = getApp()
import {
  getToken
} from "../../utils/authorization"
Page({

  /**
   * Page initial data
   */
  data: {
    dataList: [],
    loading: false,
    finished: false,
    searchKey: '',
    listQuery: {
      page: 0,
      size: 10,
      q: ''
    },
    pageInfo: {
      totalPage: 0,
      currentPage: 0
    }
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {
    if (!getToken()) {
      wx.redirectTo({
        url: '/pages/login/login',
      })
    }

    this._getList();
  },

  handleSearch: function (e) {
    console.log('result', e.detail.value);
    this.setData({
      searchKey: e.detail.value
    }, () => {
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})
