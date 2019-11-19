let greeting;
greetign = {};
console.log(greetign); // {}

// 控制台会输出空对象，因为我们刚刚在全局对象上创建了一个空对象。当我们错误地将greeting输入为greetign时，js解释器实际上在浏览器中将其视为global.greetign ={}或window.greetign = {}
// 为避免这种情况，我们可以使用"use strict".可以确保在将变量赋值之前必须声明变量。