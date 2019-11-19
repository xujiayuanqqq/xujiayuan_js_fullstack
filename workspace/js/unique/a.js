// 方法一
// const arr = [1, 2, 3, 4, 1, 4, 5, 3]
// var time = new Date().getTime();
// function unique() {
//     // 严谨性
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     // 准备一个空数组，结果数组，没有重复的元素的
//     const resultArr = [arr[0]];
//     let flag = true;
//     for (let i = 1; i < arr.length; i++) {
//         // arr[i]
//         for(let j = 0; j < resultArr.length; j++) {
//             if(arr[i] === resultArr[j]) {
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag) {
//         resultArr.push(arr[i]);            
//         }
//     }
//     return resultArr;
// }
// console.log('---------方法一--------');
// console.log(unique(arr));
// console.log('方法1所花时间：' + (new Date().getTime() - time));

// 方法二
// var time = new Date().getTime();
// function unique2(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var arr2 = arr.sort();
//     var res = [arr2[0]];
//     for(let i = 1; i < arr2.length; i++) {
//         if(arr2[i] !== res[res.length-1]) {
//             res.push(arr2[i]);
//         }
//     }
//     return res;
// }
// console.log('-------方法二-------');
// console.log(unique2([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法2所花时间：' + (new Date().getTime() - time));

//方法三
// var time = new Date().getTime();
// function unique3(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     var obj = {};
//     for(let i = 0; i < arr.length; i++) {
//         if( !obj[arr[i]] ) {
//             obj[arr[i]] = 1;
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log('---------方法三--------');
// console.log(unique3([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法3所花时间：' + (new Date().getTime() - time));

//方法四
// var time = new Date().getTime();
// function unique4(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(res.indexOf(arr[i]) == -1){
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log('---------方法四--------');
// console.log(unique4([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法4所花时间：' + (new Date().getTime() - time));

//方法五
// var time = new Date().getTime();
// function unique5(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     for(let i = 0;i < arr.length; i++) {
//         if( !res.includes(arr[i]) ) {
//             res.push(arr[i]);
//         }
//     }
//     return res;
// }
// console.log('---------方法五--------');
// console.log(unique5([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法5所花时间：' + (new Date().getTime() - time));

//方法六
// var time = new Date().getTime();
// function unique6(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     res = arr.filter(function(item){
//         return res.includes(item) ? '': res.push(item);
//     });
//     return res;
// }
// console.log('---------方法六--------');
// console.log(unique6([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法6所花时间：' + (new Date().getTime() - time));

//方法七
// var time = new Date().getTime();
// function unique7(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     arr.forEach(function(item) {
//         res.includes(item) ? '': res.push(item);                
//     });
//     return res;
// }
// console.log('---------方法七--------');
// console.log(unique7([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法7所花时间：' + (new Date().getTime() - time));

//方法八
// var time = new Date().getTime();
// function unique8(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     let i, j, 
//     len = arr.length;
//     for(i = 0; i < len; i++) {
//         for(j = i + 1; j < len; j++) {
//             if(arr[i] == arr[j]) {
//                 arr.splice(j,1);
//                 len--;
//                 j--;
//             }
//         }
//     }
//     return arr;
// }
// console.log('---------方法八--------');
// console.log(unique8([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法8所花时间：' + (new Date().getTime() - time));

//方法九
// var time = new Date().getTime();
// function unique9(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     var res = [];
//     for(let i = 0;i < arr.length; i++) {
//         res.lastIndexOf(arr[i]) !== -1 ? '': res.push(arr[i]);
//     }
//     return res;
// }
// console.log('---------方法九--------');
// console.log(unique9([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法9所花时间：' + (new Date().getTime() - time));

//方法10
// var time = new Date().getTime();
// function unique10(arr) {
//     if(!Array.isArray(arr)) {
//         console.log('type error');
//         return;
//     }
//     //Set数组结构，它类似与数组，其成员的值都是唯一的
//     return Array.from(new Set(arr));//利用Array.from将Set结构转换成数组
// }
// console.log('---------方法十--------');
// console.log(unique10([1, 1, 2, 3, 5, 1, 5, 6, 7, 4]));
// console.log('方法10所花时间：' + (new Date().getTime() - time));
