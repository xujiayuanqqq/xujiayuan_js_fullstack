//删除数组第一个元素
//删除数组arr第一个元素。不要直接修改数组arr，结果返回新的数组
// function curtail(arr) {
//     if(arr.length < 1) return -1;
//     var newarr = arr.slice(1);
//     return newarr;
// }
// console.log(curtail([1,2,3,4]));
//运行时间：1413ms
//占用内存：78136k


// function curtail(arr) {
//     if(arr.length < 1) return -1;
//     var newarr = arr.slice(0);
//     newarr.splice(0,1);
//     return newarr;
// }
// console.log(curtail([1,2,3,4]));
//运行时间：1510ms
//占用内存：77868k

// function curtail(arr) {
//     if(arr.length < 1) return -1;
//     var newarr = arr.slice(0);
//     newarr.shift();
//     return newarr;
// }
// console.log(curtail([1,2,3,4]));
//运行时间：1342ms
//占用内存：7800k

function curtail(arr) {
    if(arr.length < 1) return -1;
    var newarr = arr.slice(0);
    for(var i = 0;i < newarr.length-1;i++) {
        newarr[i]=newarr[i+1];
    }
    newarr.length--;
    return newarr;
}
console.log(curtail([1,2,3,4]));
//运行时间：1547ms
//占用内存：77844k