// 请用 javascript 实现一个函数 parseUrl(url)，将一段 url 字符串解析为 Object。
// parseUrl("http://www.xiyanghui.com/product/list?id=123456&sort=discount#title");
// {
//     protocol: "http",
//     host: "www.xiyanghui.com",
//     path: "/product/list",
//     query: {
//         id: "123456",
//         sort: "discount"
//     },
//     hash: "title"
// }
function parseUrl(url) {
    // 生成一个a标签，用a标签的属性和正则获取各个属性
    var a = document.createElement('a');
    a.herf = url;
    return {
        source: url,
        protocol: a.protocol.replace(':',''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (() => {
            var ret = {}, querys = [];
            var searchQuery = a.search.replace(/^\?/,'').split('&');
            for(var i = 0; i < searchQuery.length; i++) {
                if(searchQuery[i]) {
                    querys = searchQuery[i].split('=');
                    ret[querys[0]] = querys[1];
                }
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [,''])[1],
        hash: a.hash.replace('#',''),
        path: a.pathname.replace(/^([^\/])/,'/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
        segments: a.pathname.replace(/^\//,'').split('/')
    };
}