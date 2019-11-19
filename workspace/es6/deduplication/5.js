//利用对象的属性不能相同的特点进行去重（这种方法的去重有问题，不建议用，有待改进）
function unique(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error');
        return;
    }
    var array = [];
    var obj = {};
    for (var i = 0;i < arr.length; i++) {
        if(!obj[arr[i]]) {
            array.push(arr[i]);
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]]++;
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(unique(arr)); //有两个true直接去掉了，NaN和{}去重