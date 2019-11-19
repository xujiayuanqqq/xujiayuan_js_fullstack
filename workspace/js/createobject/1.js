// 工厂模式
function createPerson(name, job) {
    var o = new Object();
    o.name = name;
    o.job = job;
    o.sayName = function() {
        console.log(this.name);
    };
    return o;
}
var person1 = createPerson('sili','student');
var person2 = createPerson('lily','teacher');

//可以无数次调用这个工厂函数，每次都会返回一个包含两个属性和一个方法的对象。
//工厂模式虽然解决了创建多个相似对象的问题，但是没有解决对象识别问题，即不能知道对象的类型。
person1.sayName();
person2.sayName();