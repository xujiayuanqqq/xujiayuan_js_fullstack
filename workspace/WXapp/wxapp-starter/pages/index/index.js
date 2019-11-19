import {
  API_BASE
} from '../../config/api'
const app = getApp()

Page({
  data: {
    entities: [],
    isLoading: true,
    currentPage: 1,
    totalPages: 3,
    total: 0
  },
  onPullDownRefresh() {
    // console.log('下来了');
    wx.request({
      url: API_BASE,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1,
          totalPages: res.data.data.totalPages,
          total: res.data.data.total
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad() {
    wx.request({
      url: API_BASE,
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: (res) => {
        // success
        // console.log(res);
        this.setData({
          isLoading: false,
          entities: res.data.data.articles,
          currentPage: 1
        })
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onReachBottom() {
    // console.log('到底了');
    // 请求下一页的数据
    // 最后一页
    // model? 
    // 解构json
    let { currentPage, totalPages, isLoading } = this.data
    console.log(currentPage, totalPages, isLoading);
    if (currentPage >= totalPages || isLoading) {
      return;
    }
    currentPage += 1
    this.setData({
      isLoading: true
    })
    const url = `${API_BASE}/${currentPage}`;
    wx.request({
      url: API_BASE,
      success: (res) => {
        const entities = [
          ...this.data.entities,
          ...res.data.data.articles
        ];
        this.setData({
          entities,
          isLoading: false,
          currentPage
        })
      }
    })
  }
})
