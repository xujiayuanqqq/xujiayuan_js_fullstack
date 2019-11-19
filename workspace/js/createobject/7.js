//稳妥构造函数模式
//稳妥对象是没有公共属性，而且其方法也不引用this
//稳妥对象最适合在一些安全环境中（这些环境会禁止使用this和new），或防止数据被其他应用程序改动时使用
//稳妥构造函数模式和寄生构造函数类似，有两点不同：一是创建对象的实例方法不引用this，二是不适用new操作符调用构造函数

function Person(name, job) {
    var o = new Object();
    o.name = name;
    o.job = job;
    o.sayName = function() {
        console.log(name);
    };
    return o;
}
var person1 = Person('Lily','student');
person1.sayName();

//和寄生构造函数模式一样，这样创建出来的对象与构造函数之间没有什么关系，instanceof操作符对他们没有意义