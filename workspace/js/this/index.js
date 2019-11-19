var xw = {
    name : "小王",
    gender : "男",
    age : 24,
    say: function() {
        console.log(this.name + "," + this.gender + ",今年" + this.age);
    }
}
var xh = {
    name : "小红",
    gender : "女",
    age : 18
}
xw.say();
xw.say.call(xh); //对函数直接调用
xw.say.apply(xh); //对函数直接调用
xw.say.bind(xh)(); //bind方法返回的仍然是一个函数，因此后面还需要()来进行调用才可以。