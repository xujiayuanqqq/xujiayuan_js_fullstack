var v1 = 'v1';

var f1 = function () {
  console.log(v1);
};
f1();
var f2 = function () {
  var v1 = 'local';
  console.log(v1);
};
f2();


var scope = 'global';
var f = function () {
  console.log(scope); // undefined
  var scope = 'f';
};
f();

// 在访问未定义的变量或定义了但没有初始化的变量时，获得的值都是undefined


var f3 = function () {
  var scope1 = 'f0';
  (function() {
    var scope1 = 'f1';
    (function() {
      console.log(scope1); // f1
    })();
  })();
};
f3();

// 函数作用域的嵌套关系是定义时决定的，而不是调用时决定的，也就是说，Javascript的作用域是静态作用域，又叫词法作用域


var scope2 = 'top';
var f4 = function() {
  console.log(scope2);
};
f4(); // top

var f5 = function() {
  var scope2 = 'f4';
  f4();
};
f5(); // top