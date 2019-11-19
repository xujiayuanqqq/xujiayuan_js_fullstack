// 闭包只让函数执行一次
function once(f) {
    var temp = true;
    return function() {
        if(temp) {
            temp = false;
            f.apply(null, arguments);
        }
    }
}
var bar = once(function(v) {
    console.log(v);
})
bar(1);
bar(2);
bar(3);