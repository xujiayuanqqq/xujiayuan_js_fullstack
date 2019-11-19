// 双层循环
// var array = [1, 1, '1', '1'];

// function unique(array) {
//     // res用来存储结果
//     var res = [];
//     for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
//         for (var j = 0, resLen = res.length; j < resLen; j++) {
//             if (array[i] === res[j]) {
//                 break;
//             }
//         }
//         // 如果array[i]是唯一的，那么执行完循环，j等于resLen
//         if (j === resLen) {
//             res.push(array[i])
//         }
//     }
//     return res;
// }
// console.log(unique(array));


// indexOf
// var array = [1, 1, '1'];

// function unique(array) {
//     var res = [];
//     for (var i = 0, len = array.length; i < len; i++) {
//         var current = array[i];
//         if (res.indexOf(current) === -1) {
//             res.push(current)
//         }
//     }
//     return res;
// }

// console.log(unique(array));


// 排序后去重 此方法还存在问题
// var array = [1, 1, '1', 3, 2, 8, 4, 2, 1];

// function unique(array) {
//     var res = [];
//     var sortedArray = array.concat().sort();
//     var seen;
//     for (var i = 0, len = sortedArray.length; i < len; i++) {
//         // 如果是第一个元素或者相邻的元素不相同
//         if (!i || seen !== sortedArray[i]) {
//             res.push(sortedArray[i])
//         }
//         seen = sortedArray[i];
//     }
//     return res;
// }

// console.log(unique(array));

// 排序后去重  可行
// Array.prototype.unique2 = function () {
//     this.sort(); //先排序
//     var res = [this[0]];
//     for (var i = 1; i < this.length; i++) {
//         if (this[i] !== res[res.length - 1]) {
//             res.push(this[i]);
//         }
//     }
//     return res;
// }
// var arr = [1, 'a', 'a', 'b', 'd', 'e', 'e', 1, 0]
// console.log(arr.unique2());


Array.prototype.unique3 = function () {
    var res = [];
    var json = {};
    for (var i = 0; i < this.length; i++) {
        if (!json[this[i]]) {
            res.push(this[i]);
            json[this[i]] = 1;
        }
    }
    return res;
}
var arr = [112, 112, 34, '你好', 112, 112, 34, '你好', 'str', 'str1'];
console.log(arr.unique3());