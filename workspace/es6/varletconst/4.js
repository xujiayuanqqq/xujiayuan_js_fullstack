let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

//new Number()是一个内置的函数的构造函数。看起来是一个数字，其实不是一个真正的数字，它有一推额外的功能，是一个对象。
// ==会引发隐式类型转换，右侧的对象会自动拆箱为Number类型。
// 使用===操作符时，类型和值都需要相等