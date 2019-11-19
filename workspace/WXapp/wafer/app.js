//app.js
App({
  onLaunch: function () {
    wx.getStorage({
      key: 'user-info',
      success: (res) => {
        // console.log(res.data);
        this.globalData.userInfo = res.data
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息

  },

  globalData: {
    userInfo: null
  }
})