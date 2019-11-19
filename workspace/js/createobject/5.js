//动态原型模式
function Person(name, job) {
    // 属性
    this.name = name;
    this.job = job;
    // 方法
    if (typeof this.sayName !== 'function') {
        Person.prototype.sayName = function() {
            console.log(this.name);
        };
    }
}
var person1 = new Person('Lily', 'student');
person1.sayName();

//只有sayName方法不存在的时候，才会将它添加到原型中。这段代码只会初次调用构造函数的时候才会执行。
//此后原型已经完成初始化，不需要在做什么修改了
//这里对原型所做的修改，能够立即在所有实例中得到反映
//其次，if语句检查的可以是初始化之后应该存在的任何属性和方法，所以不必用一大堆的if语句检查每一个属性和方法，只要检查一个就行