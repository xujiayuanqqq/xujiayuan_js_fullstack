// 查找数组元素位置
function indexOf(arr,item) {
    if(Array.prototype.indexOf) {
        return arr.indexOf(item);
    } else {
        for(let i = 0;i < arr.length;i++) {
            if(arr[i] === item) {
                return i;
            }
        }
    }
    return -1;
}
var array = [1,2,3,4,5];
console.log(indexOf(array,3));