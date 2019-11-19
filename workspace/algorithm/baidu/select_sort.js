// N2
// 找到数组中最小的值放在第一位，......
// 坑 基址查找
const arr = [85, 24, 63, 45, 17, 31, 96, 50];
function selectionSort(arr) {
   let len = arr.length;
   for (let i = 0; i < len; i++) {
       let min = i;
    //    如果已经选择了，就是有序的，i-j数已经有序
       for (let j = i; j < len; j++) {
           if (arr[j] < arr[min]) {
               min = j;
           }
       }
       if (min !== i) {
           [arr[min], arr[i]] = [arr[i], arr[min]];
       }
   } 
   return arr;
}
console.log(selectionSort(arr));

// function selectionSort(arr) {
//     var len = arr.length;
//     var minIndex, temp;
//     for (var i = 0; i < len - 1; i++) {
//         minIndex = i; //每次都从已排序序列的末尾后一位开始
//         for (var j = i + 1; j < len; j++) {
//             if (arr[j] < arr[minIndex]) { //寻找最小的数
//                 minIndex = j; //将最小数的索引保存
//             }
//         }
//         //放到已排序序列的末尾(即交换)，该操作很有可能把稳定性打乱，所以选择排序是不稳定的排序算法
//         temp = arr[i];
//         arr[i] = arr[minIndex];
//         arr[minIndex] = temp;
//     }
//     return arr;
// }
// console.log(selectionSort(arr));