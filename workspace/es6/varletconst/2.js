for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i),1);
}
//setTimeout函数被执行时，循环已经走完。循环变量i是使用var声明的，因此该值是全局的。每次使用一元运算符++都会将i的值增加1。在调用setTimeout函数时，i已经被赋值为3.

for (let i = 0; i < 3;i++) {
    setTimeout(() => console.log(i),1);
}
//使用let关键字声明变量i，let声明的变量具有块级作用域。在每次迭代期间，i将被创建为一个新值，并且每个值都会存在于循环内的块级作用域。