function* dataConsumer() {
    console.log('Started');
    console.log(`1. ${yield}`);
    console.log(`2. ${yield}`);
    return 'result';
}

let genObj = dataConsumer();
genObj.next();
genObj.next('a');
genObj.next('b');


// 在Generator函数外面用wrapper包一层
// function wrapper(generatorFunction) {
//     return function(...args) {
//         let generatorObject = generatorFunction(...args);
//         generatorObject.next();
//         return generatorObject;
//     };
// }

// const wrapped = wrapper(function* () {
//     console.log(`First input: ${yield}`);
//     return 'DONE';
// })

// wrapped().next('hello!')


// for...of循环可以自动遍历Generator函数时生成的Iterator对象，不需要调用next方法
// function* foo() {
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
//     return 6;
// }

// for (let v of foo()) {
//     console.log(v);
// }



// function* fibonacci() {
//     let [prev, curr] = [0, 1];
//     for(;;) {
//         yield curr;
//         [prev, curr] = [curr, prev + curr];
//     }
// }

// for (let n of fibonacci()) {
//     if (n > 1000) break;
//     console.log(n);
// }
