//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab: 0,
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  clickTab: function(e) {
    // active 加到当前的也好
    // 状态改变 data binding 值
    var index = e.target.dataset.current
    this.setData({
      currentTab: index
    });
    // console.log(clickTab)
  },
  swiperTab: function(e) {
    this.setData({
      currentTab: e.detail.current
    });
  },
  onLoad: function () {
    // 界面的改变由数据决定
    // 界面的状态 === 数据的值
    // MVVM 区分于dom api 
    // setTimeout(() => {
    //   this.setData({
    //     currentTap: 1
    //   });
    // }, 1500);
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
