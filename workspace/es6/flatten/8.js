//join & split
function flatten(arr) {
    return arr.join(',').split(',').map(function(item) {
        return parseInt(item);
    })
}
var array = [1,[2,3,[4,[5,6,[7,8,[9,0]]]]]];
console.log(flatten(array));