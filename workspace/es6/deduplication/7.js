//利用hasOwnProperty
//利用hasOwnProperty判断是否存在对象属性
function unique(arr) {
    var obj = {};
    return arr.filter(function(item, index, arr) {
        return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true);
    });
}
// var arr = [0,0,1,1];
var arr = [null,null,1,1];
// var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr));