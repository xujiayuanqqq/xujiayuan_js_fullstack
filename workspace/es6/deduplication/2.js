//利用for嵌套for，然后splice去重 ES5
function unique(arr) {
    for(var i = 0;i < arr.length; i++) {
        for(var j = i + 1;j < arr.length;j++) {
            if(arr[i] === arr[j]) {
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr));