import Mock from 'mockjs'
import articleAPI from './article'
// 接口
Mock.mock(/\/article\/list/, 'get',articleAPI.getList);

export default Mock