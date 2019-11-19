//计数排序 Counting Sort
function countingSort(arr,maxValue) {
    var bucket = new Array(maxValue+1);
    var sortedIndex = 0;
    var arrLen = arr.length;
    var bucketLen = maxValue + 1;
    for(var i = 0;i < arrLen;i++) {
        if(!bucket[arr[i]]) {
            bucket[arr[i]] = 0;
        }
        bucket[arr[i]]++;
    }
    for(var j = 0; j < bucketLen; j++) {
        while(bucket[j] > 0) {
            arr[sortedIndex++] = j;
            bucket[j]--;
        }
    }
    return arr;
}
var array = [3,44,38,5,47,15,36,26,27,44,46,4,19,50,48];
console.log(countingSort(array,15));