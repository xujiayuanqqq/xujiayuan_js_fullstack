// 立即执行函数
// 范围 scope

// (function() {
//     var a = b = 5;
// })();
// console.log(b); // 5
// console.log(a); //ReferenceError: a is not defined

//在立即执行函数表达式中，有两个命名，但是其中变量是通过关键字var来声明的，这就意味着a是这个函数的局部变量。与此相反，b是在全局作用域下的。
//在函数中没有使用严格模式（"use strict"）。如果严格模式开启，那么代码就会报出未捕获引用错误（Uncaught RefenrenceError）:b没有被定义
//严格模式要求你在需要使用全局变量时，明确地引用该变量。

(function() {
    'use strict';
    var a = window.b =5;
})();
console.log(b);
console.log(a);