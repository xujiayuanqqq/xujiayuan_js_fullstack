//移除数组中的元素 
//改变原来的数组
function remove(arr,item) {
    for(let i=0;i<arr.length;i++) {
        if(arr[i] === item) {
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
console.log(remove([1,2,2,3,4,2,2],2));

//返回新数组 for循环push()
// function remove(arr,item) {
//     var newarr = [];
//     for(let i=0;i<arr.length;i++) {
//         if(arr[i] != item) {
//             newarr.push(arr[i]);
//         }
//     }
//     return newarr;
// }
// console.log(remove([1,2,3,4,2],2));

//slice()拷贝使用splice()删除与item相同的值并把数组索引回退一个值
// function remove(arr,item) {
//     var newarr = arr.slice(0);
//     for(var i=0;i<newarr.length;i++) {
//         if(newarr[i] === item) {
//             newarr.splice(i,1);
//             i--;
//         }
//     }
//     return newarr;
// }
// console.log(remove([1,2,3,4,2],2));

//filter()进行过滤满足的数组属性将保留，并返回一个新数组
// function remove(arr,item) {
//     return arr.filter(function(ele) {
//         return ele !==item;
//     })
// }
// console.log(remove([1,2,3,4,2],2));