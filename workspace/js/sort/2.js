//选择排序 Selection Sort
function selectionSort(arr) {
    var len = arr.length;
    var minIndex,temp;
    for(var i = 0; i < len - 1; i++) {
        minIndex = i;
        for(var j = i + 1; j < len; j++) {
            if(arr[j] < arr[minIndex]) { //寻找最小的数
                minIndex = j;    //将最小的数索引保存
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(selectionSort(array));