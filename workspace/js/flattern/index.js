// 1.faltten 功能以后慢慢学
// 2.数组的一些超纲但常用，npm 包提供了这种功能
// lodash underscore
// 3.代码的宿主环境是 命令行
// 4.npm init -y package.json
// 5.yarn add lodash  npm i -g npm  npm i --save lodash
// 6.在当前文件中，引入node_modules下的lodash
// 7.使用它完成flatten，看文档


// 引入lodash lodash是在nodemodules(本地项目中)npm包， 模块
// const _ = require('lodash');
// const arr = [1, 2, [3, 4], [5, [6, 7]]];
// console.log(_.flattenDeep(arr));
// console.log(_.uniq([1,2,3,2,5,3,1,6,4]));



// function product() {
//     // 1、创建一个空数组,
//     var newarr = [];
//     ///2、并且返回一个函数,函数参数为要拍平的数组
//     return function flatten(arr) {
//         // 3、循环数组，判断每一项,不为数组的话将其塞入newarr
//         // 若为数组,递归调用 faltten,并将结果与newarr合并
//         for (var t of arr) {
//             if (!Array.isArray(t)) {
//                 newarr.push(t);
//             } else {
//                 newarr.concat(flatten(t))
//             }
//         }
//         return newarr
//     }
// }
// var flatten = product();
// console.log(flatten(arr));



// function flatten(arr) {
//     return arr.reduce(function (pre, cur) {
//         if (!Array.isArray(cur)) {
//             return [...pre, cur];
//         } else {
//             return [...pre, ...flatten(cur)]
//         }
//     }, [])
// }
// console.log(flatten(arr));





// var arr = [1, [[[[7, [2]], 2], 8, 9], 3]];
// function f(arr) {
//     if (Object.prototype.toString.call(arr) != "[object Array]") //判断数组对象
//         return;
//     var newArr = [];
//     function fn(arr) { //闭包函数
//         for (var i = 0; i < arr.length; i++) { //遍历数组
//             if (arr[i].length) {  //判断是不是多维数组.j的设置可以选择从左往右拍几次，去掉即可完全打平 
//                 fn(arr[i]);       //递归调用
//             } else {
//                 newArr.push(arr[i]);
//             }
//         }
//     }
//     fn(arr); //调用 启动
//     return newArr;
// }
// arr = f(arr); //调用 启动
// console.log(arr);

const arr = [1, 2, [3, 4], [5, [6, 7]]];
function flatten(arr){
    if(!Array.isArray(arr)){
        return;
    } else {
        return arr.toString().split(",");
    }
}
console.log(flatten(arr));

//递归
