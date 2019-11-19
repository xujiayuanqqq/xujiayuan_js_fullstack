解析URL Params为对象
尽可能的全面正确的解析一个任意url的所有参数为Object，注意边界条件是处理
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';
parseParam(url)
结果
{
    user:'anonymous'
    id:[123,456], //重复出现的key要组装成数组，能被转换成数字的就转成数字类型
    city:'北京'， //中文需解码
    enabled:true, //未指定值得key约定为true
}