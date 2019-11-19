//寄生构造函数模式
//创建一个构造函数，该函数的作用仅仅是封装创建对象的代码，然后再返回新建对象

function Person(name, job) {
    var o = new Object();
    o.name = name;
    o.sayName = function() {
        console.log(this.name);
    }
    return o;
}
var person1 = new Person('Lily','student');
person1.sayName();

//这个模式，除了使用new操作符并把使用的包装函数叫做构造函数之外，和工厂模式几乎一样
//构造函数如果不返回对象，默认也会返回一个新的对象，通过在构造函数的末尾添加一个return语句，可以重写调用构造函数时返回的值