var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say: function(school,grade) {
        console.log(this.name + "," + this.gender  + this.age + ",在" + school + "上" + grade);
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}
xw.say();
xw.say.call(xh,"实验小学","六年级");
xw.say.apply(xh,["实验中学","高三"]);
xw.say.bind(xh,"实验中学","高三")();
// call后面的参数与say方法一一对应，而apply的第二个参数是一个数组，数组中的元素是和say方法中一一对应，这就是两者最大的区别
//类（伪）数组使用数组方法
// var divElements = document.getElementsByTagName('div'); // 虽然divElements有length属性，但是他是一个伪数组，不能使用数组里面的方法
// Array.isArray(divElements); //false
// var domNodes = Array.prototype.slice.call(document.getElementsByTagName('div'));
// 将数组对象Array里的this指向伪数组document.getElementsByTagName('div'),
// slice()方法可以从已有的数组中返回选定的元素，不传参数是，返回整个数组
// Array.isArray(domNodes); //true
//验证一个对象的类型可以用：Object.prototype.toString.call(obj)