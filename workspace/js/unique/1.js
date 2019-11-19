// 方法二
// var time = new Date().getTime();no
function unique2(arr) {
    if(!Array.isArray(arr)) {
        console.log('type error');
        return;
    }
    var arr2 = arr.sort();
    var res = [arr2[0]];
    for(let i = 1; i < arr2.length; i++) {
        if(arr2[i] !== res[res.length-1]) {
            res.push(arr2[i]);
        }
    }
    return res;
}
console.log('-------方法二-------');
console.log(unique2([1, 1, 100, 2, 3, 5, 1, 5, 6, 7, 4, 6, 7, 0]));
// console.log('方法2所花时间：' + (new Date().getTime() - time));