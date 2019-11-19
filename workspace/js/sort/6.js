//快速排序 Quick Sort
function quickSort(arr,left,right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;
    if(left < right) {
        partitionIndex = partition(arr,left,right);
        quickSort(arr,left,partitionIndex - 1);
        quickSort(arr,partitionIndex + 1,right);
    }
    return arr;
}

function partition(arr,left,right) { //分区操作
    var pivot = left;  //设定基准值（pivot）
    var index = pivot + 1;
    for (var i = index;i <= right; i++) {
        if(arr[i] < arr[pivot]) {
            swap(arr,i,index);
            index++;
        }
    }
    swap(arr,pivot,index - 1);
}

function swap(arr,i,j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(quickSort(array));