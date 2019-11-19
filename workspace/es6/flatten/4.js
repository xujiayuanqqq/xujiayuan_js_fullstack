//reduce方法
//reduce()方法对累加器和数组中的每个元素（从左到右）应用一个函数，将其减少为单个值
function flatten(arr) {
    return arr.reduce(function(prev,cur) {
        return prev.concat(Array.isArray(cur) ? flatten(cur) : cur);
    },[]);
}
var array = [1,[2,3,[4,[5,6,[7,8,[9,0]]]]]];
console.log(flatten(array));