function sayHi() {
    //var name = undefined; 变量提升
    console.log(name);
    console.log(age);
    var name = "Lily";
    let age = 21;
}
sayHi();

//var声明了变量name在创建阶段会被提升，默认值为undefined
//let(const)声明或初始化之前，它是不被访问的，被称作“暂时性死区"。在声明变量之前访问变量时，JavaScript会抛出一个ReferenceError。let的创建过程被提升了，但初始化没有提升。

//变量赋值可以分为三个阶段：
//创建变量，在内存中开辟空间
//初始化变量，将变量初始化为undefined
//真正赋值

//let的创建过程被提升了，但初始化没有提升。
//var的创建和初始化都被提升了。
//function的创建、初始化、赋值都被提升了。