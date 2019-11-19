// 构造函数模式
function Person(name, job) {
    this.name = name;
    this.job = job;
    this.sayName = function() {
        console.log(this.name);
    };
}
var person1 = new Person('sili','student');
var person2 = new Person('lily','teacher');

//没有显示的创建对象，使用new来调用这个构造函数，使用new后会自动执行如下操作：
//创建一个新对象
//这个新对象会被执行[[prototype]]链接
//这个新对象会绑定到函数调用的this
//返回这个对象
//使用构造函数创建对象，每个方法都要在每个实例上重新创建一次。