// 泛型-generic
// function join<Splicing>(first: Splicing, second: Splicing) {
//   return `${first}${second}`
// }

// join<number>(1, 2);
// console.log(join<number>(1, 2));

// 泛型中数组的使用

function myFun<ANY>(params: ANY[]) {
  return params;
}

myFun < string > (["1234", "123234"]);
console.log(myFun < string > (["1234", "123234"]));


// 多个泛型
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join < number, string > (1, "2");
console.log(join < number, string > (1, "2"));
