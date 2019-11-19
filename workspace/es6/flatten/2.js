//循环数组+递归
//循环数组，如果数据中还有数组的话，递归调用flatten扁平函数（利用for循环扁平），用concat连接，最终返回result
function flatten(arr) {
    var result = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}
var array = [1,[2,3,[4,[5,6,[7,8,[9,0]]]]]];
console.log(flatten(array));