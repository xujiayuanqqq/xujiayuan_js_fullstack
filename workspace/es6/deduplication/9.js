//利用递归去重 有问题
function unique(arr) {
    var array = arr;
    var len = array.length;
    array.sort(function(a,b) { //排序后更加方便去重
        return a - b;
    });
    function loop(index) {
        if(index >= 1) {
            if(array[index] === array[index - 1]) {
                array.splice(index,1);
            }
            loop(index - 1); //递归loop,然后数组去重
        }
    }
    loop(len - 1);
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr));