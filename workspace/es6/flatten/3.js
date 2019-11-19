//利用apply
//利用arr.some判断当数组中还有数组的话，递归调用flatten扁平函数（利用apply扁平），用concat连接，最终返回arr
function flatten(arr) {
    while(arr.some(item => Array.isArray(item))) {
        arr = [].concat.apply([],arr);
    }
    return arr;
}
var array = [1,[2,3,[4,[5,6,[7,8,[9,0]]]]]];
console.log(flatten(array));