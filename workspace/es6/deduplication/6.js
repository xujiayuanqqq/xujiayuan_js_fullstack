//利用includes
function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error!');
        return;
    }
    var array = [];
    for(var i = 0; i < arr.length; i++) {
        if(!array.includes(arr[i])) {
            array.push(arr[i]);
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr));