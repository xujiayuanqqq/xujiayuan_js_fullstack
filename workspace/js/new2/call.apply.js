// var obj1 = {
//     name: 'sven'
// }
// var obj2 = {
//     name: 'anne'
// }

// window.name = 'window';
// var getName = function() {
//     // 函数this 有运行时决定, 运行时的函数调用方式来决定
//     console.log(`Hi,I am ${this.name}`)
// }
// 普通函数
// this可以被指定
// getName.call(obj1);
// getName.apply(obj1);


var func = function(a, b, c) {
    console.log([a, b, c]);
}
var func1 = new func(2,3,4);
func.apply(func1, [1, 2, 3]);
func.call(null, 1, 2, 3);
