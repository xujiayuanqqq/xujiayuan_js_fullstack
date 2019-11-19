//删除数组的最后一个元素
//删除数组arr最后一个元素。不要直接修改数组arr，结果返回新的数组
// function truncate(arr) {
//     if(arr.length<1) return -1;
//     var newarr = arr.slice(0,arr.length-1);
//     return newarr;
// }
// console.log(truncate([1,2,3,4]));
//运行时间：1578ms
//运行内存：77872k

function truncate(arr) {
    if(arr.length < 1) return -1;
    var newarr = arr.slice(0);
    newarr.pop();
    return newarr;
}
console.log(truncate([1,2,3,4]));
//运行时间：1359ms
//运行内存：77856k
