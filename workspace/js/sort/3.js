//插入排序 Insertion Sort
function insertionSort(arr) {
    var len = arr.length;
    var preIndex,current;
    for(var i = 0; i < len; i++) {
        preIndex = i - 1;
        current = arr[i];
        while(preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex+1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex+1] = current;
    }
    return arr;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(insertionSort(array));