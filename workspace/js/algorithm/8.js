//数组合并
//合并数组arr1和数组arr2，不要直接修改数组arr，结果返回新的数组。
// function concat(arr1,arr2) {
//     var newarr = arr1.concat(arr2);
//     return newarr;
// }
// console.log(concat([1,2,3,4],["a","b","c",1]));
//运行时间：1328ms
//占用内存：77868k

//没有通过
// function concat(arr1,arr2) {
//     var newarr = arr1.slice(0);
//     var length = newarr.length;
//     for(var i = 0;i < arr2.length;i++) {
//         newarr[length+i] = arr2[i];
//     }
//     newarr.length = length + arr2.length;
//     return newarr;
// }
// console.log(concat([1,2,3,4],["a","b","c",1]));


// function concat(arr1,arr2) {
//     var newarr = arr1.slice(0);
//     for(var i in arr2) {
//         newarr.push(arr2[i]);
//     }
//     return newarr;
// }
// console.log(concat([1,2,3,4],["a","b","c",1]));
//运行时间：1326ms
//占用内存：78000k

// function concat(arr1,arr2) {
//     var newarr = arr1.slice(0);
//     newarr.push.apply(newarr,arr2);
//     return newarr;
// }
// console.log(concat([1,2,3,4],["a","b","c",1]));
//运行时间：1350ms
//占用内存：77876k

// function concat(arr1,arr2) {
//     var newarr = [...arr1,...arr2];
//     return newarr;
// }
// console.log(concat([1,2,3,4],["a","b","c",1]));
//运行时间：1330ms
//占用内存：77868k

