function splat(fun) {
  return function(array) {
    return fun.apply(null, array)
  }
}
var addArrayElements = splat(function(x, y) { return x + y })
console.log(addArrayElements([1, 2]))

function unsplat(fun) {
  return function() {
    return fun.call(null, _.toArray(arguments))
  }
}
var joinElements = unsplat(function(array) { return array.join(' ') })
console.log(joinElements(1, 2))