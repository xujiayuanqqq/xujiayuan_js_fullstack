//求二次方
//为数组arr中的每个元素求二次方。不要直接修改数组arr，结果返回新的数组
// function square(arr) {
//     var newarr = arr.slice(0);
//     for(var i in arr) {
//         newarr[i] = newarr[i] * newarr[i];
//     }
//     return newarr;
// }
// console.log(square([1,2,3,4]));
//运行时间：1435ms
//占用内存：77748k


//for
// function square(arr) {
//     var newarr = [];
//     for(var i = 0; i < arr.length; i++) {
//         newarr.push(arr[i] * arr[i]);
//     }
//     return newarr;
// }
// console.log(square([1,2,3,4]));
//运行时间：1373ms
//占用内存：80428k


//forEach
// function square(arr) {
//     var newarr = [];
//     arr.forEach(function(e) {
//         newarr.push(e * e);
//     });
//     return newarr;
// }
// console.log(square([1,2,3,4]));
//运行时间：1325ms
//占用内存：77868k


//map
function square(arr) {
    var newarr = arr.map(function(e,index,arr) {
        return e * e;
    });
    return newarr;
}
console.log(square([1,2,3,4]));
//运行时间：1309ms
//占用内存：77876k