// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phoneNumber: '',
    detailInfomation: '',
  },
  nameInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  numberInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  addressInput: function(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.getStorage({
      success: (res) =>{
        this.setData({
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },
  saveInformation: function(e) {
    console.log('开始保存');
    wx.setStorage({
      // key: '',
      data: '',
      success: (res) => {

      }
    })
  }
})