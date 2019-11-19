//map 只能遍历数组，不能中断，返回值是修改后的数组。map()返回的是新数组
var a = [1,2,3,4,5];
var b = a.map(function (x) {
    return x * x;
});
console.log(b);
console.log(a);