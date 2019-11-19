// function Foo() {
//     var i = 0;
//     return function() {
//         console.log(i++);
//     }
// }
 
// var f1 = Foo(),
//     f2 = Foo();
// f1();
// f1();
// f2();

// var a = {
//     a: 1,
//     b: 2
// }
// var b = a.a;
// var c = a;
// c.a = 3;
// b++;
// console.log(a.a);
// console.log(b);


// var ary = Array(3);
// ary[0] = 2;
// var result = ary.map(function(elem){return "1";})
// console.log(result);


function Student(name,age,sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.printAge = function() {
        console.log(this.age);
    };
    this.printSex = function() {
        console.log(this.sex);
    }
}

var student = new Student("张三",18,'男');
student.printAge();
student.printSex();