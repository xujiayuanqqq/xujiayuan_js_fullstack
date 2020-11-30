var generateClosure = function() {
  var count = 0;
  var get = function() {
    count++;
    return count;
  };
  return get;
};

var counter = generateClosure();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3