//堆排序 Heap Sort
var len;
function buildMaxHeap(arr) { //建立大顶堆
    len = arr.length;
    for(var i = Math.floor(len/2);i >= 0;i--) {
        heapify(arr,i);
    }
}

function heapify(arr, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var largest = i;
    if(left < len && arr[left] > arr[largest]) {
        largest = left;
    }
    if(right < len && arr[right] > arr[largest]) {
        largest = right;
    }
    if(largest != i) {
        swap(arr, i, largest);
        heapify(arr,largest);
    }
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function heapSort(arr) {
    buildMaxHeap(arr);

    for(var i = arr.length - 1;i > 0;i--) {
        swap(arr,0,i);
        len--;
        heapify(arr,0);
    }
    return arr;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(heapSort(array));