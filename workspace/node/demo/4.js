// 命令行调试
var a = 1;
var b = 'world';
var c = function (x) {
  console.log('hello' + x + a);
};
c(b);
console.log(process.argv);