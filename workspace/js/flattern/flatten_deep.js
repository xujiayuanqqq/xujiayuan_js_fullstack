function flatten(arr) {
    // 削藩
    return arr.reduce(function (prev, next) {
        console.log(prev, next);
        return prev.concat(Array.isArray(next)?flatten(next):next);
        // if (!Array.isArray(next)) {
        //     return [...prev, next];
        // } else {
        //     return [...prev, ...flatten(next)]
        // }
    }, []) //reduce递减功能的初始化 reduce初始值为一个空数组 push到空的数组
}
console.log(flatten([1, 2, [3, 4], [5, [6, 7]]]));