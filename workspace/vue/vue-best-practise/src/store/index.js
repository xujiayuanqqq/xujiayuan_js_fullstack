import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

const state = {
  totalTime: 0,
  list: [{
    name: '二狗',
    avatar: 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256',
    date: '2018-12-25',
    totalTime: '12',
    comment: '12月25日晚上，陪女朋友一起过圣诞节需要12个小时'
  }]
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
