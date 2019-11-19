//查找重复元素
//找出数组arr中重复出现的yuansu
// function duplicates(arr) {
//     for(var i = arr.length; i >= 0;i--) {
//         var newarr = arr[i];
//         for(var j = 0; j < i; j++) {
//             if(newarr === arr[j]) {
//                 arr.splice(i,1);
//                 break;
//             }
//         }
//     }
//     return arr;
// }
// console.log(duplicates([1,2,4,4,3,3,1,5,3])); //[1,2,4,3,5,]



// function duplicates(arr) {
//     var arr1 = [];
//     var arr2 = [];
//     for(var i in arr) {
//         var newarr = arr[i];
//         if(newarr === arr1[i]) continue;
//         if(arr2[newarr] !== 1) {
//             arr1.push(newarr);
//             arr2[newarr] = 1;
//         }
//     }
//     return arr1;
// }
// console.log(duplicates([1,2,4,4,3,3,1,5,3]));//[1,2,4,3,5]



function duplicates(arr) {
    var arr1 = [];
    var flag = 0;
    for (var i = 0; i < arr.length; i++) {
        for(var j = i+1; j < arr.length; j++) {
            if(arr[i] === arr[j]) {
                flag++;
                if(flag === 1) {
                    arr1.push(arr[i]);
                }
                arr.splice(j,1);
            }
        }
        flag = 0;
    }
    return arr1;
}
console.log(duplicates([1,2,4,4,3,3,1,5,3]));
//运行时间：1617ms
//占用内存：77812k

