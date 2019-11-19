//计数
//统计数组arr中值等于item的元素出现的次数
// function count(arr,item) {
//     var num = 0;
//     for(var i = 0;i<arr.length;i++) {
//         if(arr[i] === item) {
//             num++;
//         }
//     }
//     return num;
// }
// console.log(count([1,2,4,4,3,4,3],4));
//运行时间：1440ms
//占用内存：77876k

// function count(arr,item) {
//     var num = 0;
//     arr.forEach(function(a) {
//         // if(a === item) {
//         //     num++;
//         // }
//         a === item ? num++: 0;
//     });
//     return num;
// }
// console.log(count([1,2,4,4,3,4,3],4));
//运行时间1400ms
//占用内存：77876k


function count(arr,item) {
    var num = 0;
    arr.map(function(a) {
        a === item ? num++ : 0;
    });
    return num;
}
console.log(count([1,2,4,4,3,4,3],4));
//运行时间：1277ms
//占用内存：78004k
