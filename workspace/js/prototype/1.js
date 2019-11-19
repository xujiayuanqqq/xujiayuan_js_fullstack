var obj = {a: 1};
console.log("a" in obj);
console.log("toString" in obj);
// 原型链对象上是否具有属性
// obj 对象
// name 属性
// obj, a false
// obj b false
// obj toString true
function hasPrototypeProperty(o, name) {
    //判断原型链上或自身自带的一些属性和方法
   return name in o && !o.hasOwnProperty(name);
}
console.log(hasPrototypeProperty(obj, "toString"));
console.log(hasPrototypeProperty(obj, "a"));

// 函数是对象 Object 
// Person 可以是 程序员， 作曲家， 作者的原型链对象
// prototype 属性 in obj in Object
// prototype 入口？ js 把有对象其实是由function 构造的
// 函数都有的属性

// 实例Instance p1 p2 都有自身属性name
// 由Person 构建函数 this.name = 
// Person constructor 构造函数 
// sayName  Person.prototype.sayName
// 新的对象的构建
// 不是类与对象的关系， 父子，
// 原型关系
// constructor 属性设置， 车头
// constructor -> prototype
// 方法， prototype 车身

//当实例都是一类实体，他们需要建立共同(指包含相同的属性)构造函数和共同原型链对象来调用
// const p1 = new Person('王小虎');

function Person(name) {
    this.name = name;

}
// js 原型式继承
// constructor Person name + books 属性
// prototype Person的方法链 + 方法链(自身方法)
function Author(name, books) {
    // 新的构造函数 this=>Author .call的使用方法？
    // 函数
    Person.call(this, name);
    this.books = books;   
}
// 得到Person的prototype
extend(Author, Person);

Author.prototype.getBooks = function() {
    return this.books;
}
// Author.prototype = {
//     getBooks: function() {
//         return this.books
//     }
// }
Author.prototype.getName = function() {
    return this.name;
}
// 构造函数 Author prototype ->
// superClass prototype -> superClass.prototype
function extend(subClass, superClass) {
    // 第三者 干净
    var F = function() {};//空的构造函数
    F.prototype = superClass.prototype;
    // p1.prototype->F.prototype
    subClass.prototype = new F (); //新的对象
    // 失去构造函数
    subClass.prototype.constructor = subClass;
    // console.log(subClass.prototype.constructor);
}
const author = new Author('雨果', ['悲惨世界']);
// java 对象拥有新的方法和属性的一份拷贝
// ? author 函数prototype 指向 Author的prototype
// this 实例对象 函数， this 指向 作用域内可以找到属性
// 方法？ prototype 去查找Author 对象的prototype
console.log(author.getName());
console.log(author.getBooks());

// 函数 
// js 几乎所有的函数都有一个prototype属性，
// 指针一样，指向一个对象，属性或方法的集合
//函数自身带有一个prototype属性
Person.prototype = {
    getName: function() {
        return this.name
    }
}
// Person.prototype.getName = function() {
//     return this.name;
// }
