//排序算法
//冒泡排序 Bubble Sort
function bubbleSort(arr) {
    var len = arr.length;
    for(var i = 0;i < len;i++) {
        for(var j = 0;j < len - 1 - i;j++) {
            if(arr[j] > arr[j+1]) {
                var temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(bubbleSort(array));