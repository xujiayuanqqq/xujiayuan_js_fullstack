//利用sort()
function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error!');
        return;
    }
    arr = arr.sort();
    var array = [arr[0]];
    for(var i = 1; i < arr.length; i++) {
        if(arr[i] !== arr[i-1]) {
            array.push(arr[i]);
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr));