//斐波那契数列
// function *fibonacci() {
//     var [prev,curr] = [0,1];
//     while(true) {
//         [prev,curr] = [curr,prev+curr];
//         yield curr;
//     }
//     for(let n of fibonacci()) {
//         console.log(n);
//         if(n >= 1000) {
//             break;
//         }
//     }
// }

//用JavaScript实现斐波那契数列函数，返回第n个斐波那契数。f(1) = 1,f(2) = 2等
function fibonacci(n) {
    if(n === 1 || n === 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
console.log(fibonacci(10));
//运行时间：1511ms
//占用内存：77876k