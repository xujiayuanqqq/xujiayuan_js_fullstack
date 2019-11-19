//toString(数组元素为数字)
//数组适用toString()方法后变成以逗号分割的字符串，然后map遍历数组把每一项再变回整数并返回map后的结果
function flatten(arr) {
    return arr.toString().split(',').map(function(item) {
        return parseInt(item);
    });
}
var array = [1,[2,3,[4,[5,6,[7,8,[9,0]]]]]];
console.log(flatten(array));