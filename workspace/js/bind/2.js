Function.prototype.bind2 = function(context) {
    var self = this;
    var args = Arrray.prototype.slice.call(arguments,1);
    //arguments并不是一个数组，只是与数组类似而已。将arguments转换成一个数组对象,等于arguments.slice(1),然而arguments并没有slice方法
    var fNOP = function() {}
    var bound = function () {
        var bindArgs = Array.prototype.slice.call(arguments); 
        self.apply(this instanceof self ? this : context, args.concat(bindArgs));
    }
    fNOP.prototype = this.prototype;
    bound.prototype = new fNOP();
    return bound;
}

var value = 2;
var foo = {
    value : 1
}
function bar(name, age) {
    this.habit = 'shopping';
    console.log(this.value); 
    console.log(name);
    console.log(age);
}
bar.prototype.friend = 'Kevin';
var bindFoo = bar.bind(foo,'daisy');
var obj = new bindFoo('18');
console.log(obj.habit);
console.log(obj.friend);