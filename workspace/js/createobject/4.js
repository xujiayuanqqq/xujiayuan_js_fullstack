// 组合使用构造函数和原型模式
function Person(name) {
    this.name = name;
    this.friends = ['sili','student']
}
Person.prototype.sayName = function() {
    console.log(this.name);
};
var person1 = new Person();
var person2 = new Person();
person1.friends.push('Lily');
console.log(person1.friends);
console.log(person2.friends);
console.log(person1.friends === person2.friends);