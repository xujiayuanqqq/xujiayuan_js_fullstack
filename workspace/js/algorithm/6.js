//添加元素
//在数组arr开头添加元素item。不要直接修改数组arr，结果返回新的数组
// function prepend(arr,item) {
//     var newarr = arr.slice(0);
//     if(newarr.length < 1) {
//         newarr[0] = item;
//     }
//     newarr.unshift(item);
//     return newarr;
// }
// console.log(prepend([1,2,3,4],10));
//运行时间：1439ms
//占用内存：111256k


// function prepend(arr,item) {
//     var newarr = arr.slice(0);
//     if(newarr.lenght < 1) {
//         newarr[0] = item;
//     }
//     newarr.splice(0,0,item);
//     return newarr;
// }
// console.log(prepend([1,2,3,4],10));
//运行时间：1588ms
//占用内存：78456k

function prepend(arr,item) {
    var newarr = [item];
    var arr1 = newarr.concat(arr);
    return arr1;
}
console.log(prepend([1,2,3,4],10));
//运行时间：1354ms
//占用内存：77872k