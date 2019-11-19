//forEach 只能遍历数组，不能中断，没有返回值（或认为返回值是undefined，故无法链式调用）。传递的函数作为forEach()的第一个参数，然后forEach()使用三个参数调用该函数：数组元素、元素的索引和数组本身。

//只传入一个参数，数组元素的值
// var data = [1,2,3,4,5];
// var sum = 0;
// data.forEach(function (value) {
//     sum += value;
// });
// console.log(sum);
// console.log(data);

//传入三个参数 数组元素、元素的索引、数组本身
// var data = [1,2,3,4,5];
// var sum = 0;
// data.forEach(function(v,i,a) {
//     a[i] = v + 1;
// });
// console.log(data);


//当数组项是复杂类型时，操作元素也会改变原数组
// let arr = [
//     {name: "zl"},
//     {age: 21}
// ];
// arr.forEach((item) => {
//     item.job = "coder"
// });
// console.log(arr);

// 不能通过break中断循环，但是用try{}catch{}可以抛出异常跳出循环。可以用throw方法手动抛出一个异常，这样就跳出了forEach循环。
let arr = [0,1,2,3,4,5,6];
try {
    arr.forEach((item) => {
        if(item ===3) {
            throw 'Jump out now!'
        }
        console.log(item);
    })
} catch (e) {
    console.log(e)
}