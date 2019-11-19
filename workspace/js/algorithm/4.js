//添加元素
//在数组arr末尾添加元素item，不要直接修改数组arr，结果返回新的数组
// function append(arr,item) {
//     var newarr = arr.slice(0);
//     if(newarr.length < 0) {
//         newarr[0] = item;
//     } else {
//         newarr.push(item);
//     }
//     return newarr;
// }
// console.log(append([1,2,3,4],10));

// function append(arr,item) {
//     var newarr = [item];
//     var arr1 = arr.concat(newarr);
//     return arr1;
// }
// console.log(append([1,2,3,4],10));

function append(arr,item) {
    var newarr = arr.slice(0);
    newarr.splice(newarr.length,0,item);
    return newarr;
}
console.log(append([1,2,3,4],10));