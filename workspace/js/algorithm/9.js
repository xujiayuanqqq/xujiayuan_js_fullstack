//添加元素
//在数组arr的index处添加item，不要直接修改数组arr，结果返回新的数组
// function insert(arr,item,index) {
//     var newarr = arr.slice(0);
//     newarr.splice(index,0,item);
//     return newarr;
// }
// console.log(insert([1,2,3,4],"z",2));
//运行时间：1318ms
//占用内存：77880k

//没有通过
function insert(arr,item,index) {
    var newarr = arr.slice(0,index);
    var arr1 = arr.slice(index);
    arr1.unshift(item);
    var arr2 = newarr.concat(arr1);
    return arr2;
}
console.log(insert([1,2,3,4],"z",2));