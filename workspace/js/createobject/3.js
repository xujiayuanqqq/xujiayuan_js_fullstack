//原型模式
// function Person() {
//     Person.prototype.name = 'lili';
//     Person.prototype.job = 'student';
//     Person.prototype.sayName = function() {
//         console.log(this.name);
//     };
//  }

 function Person() {
 }
 Person.prototype = {
     //constructor: Person, constructor属性默认是不可枚举的，这样直接设置，它将是可以枚举的。
     name: 'lili',
     job: 'student',
     sayName: function() {
         console.log(this.name);
     }
 }
 var person1 = new Person();
 
 //将信息直接添加到原型对象上，使用原型的好处是可以让所有的实例对象共享它所包含的属性和方法，不必在构造函数中定义对象实例信息。
 // 将Person.prototype设置为等于一个以对象字面量形式创建的对象，但是会导致.constructor不再指向Person
 //使用这种方式，完全重写了默认的Person.prototype对象，因此，.constructor也不会存在这里
