//index.js
//获取应用实例
//从text-drive.js文件中导入testDrive
import testDrive from '../../modules/test-drive/'
// console.log(testDrive)
// 在Page里得到app
const app = getApp()

Page({
  data: {
    slides: []
  },
  onLoad() {
    this.setData({
      slides: app.globalData.slides
    })
  },
  //事件处理函数
  testDrive,
  readMore(event) {
    const id = event.target.dataset.id
    wx.navigateTo({
      url: `/pages/vehicies/show?id=${id}`,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }



})
