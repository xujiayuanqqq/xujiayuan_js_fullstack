//利用Map数据结构去重
//创建一个空Map数据结构，遍历需要去重的数组，把数组的每个元素作为key存到Map中。由于Map中不会出现相同的key值，所以最终得到的就是去重的结果。
function arrayNonRepeatfy(arr) {
    let map = new Map();
    let array = new Array(); //数组用于返回结果
    for(let i = 0;i < arr.length; i++) {
        if(map.has(arr[i])) { //如果有该key值
            map.set(arr[i], true);
        } else {
            map.set(arr[i], false); //如果没有该key值
            array.push(arr[i]);
        }
    }
    return array;
}
var arr = [1,1,'true','true',true,true,15,15,false,false,undefined,undefined,null,null,NaN,NaN,'NaN',0,0,'a','a',{},{}];
console.log(arrayNonRepeatfy(arr));