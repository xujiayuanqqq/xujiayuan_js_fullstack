//js数组扁平化 flatten()、flattenDeep(arr)、falttenDepth(arr,depth)
_.flattenDeep([1,[2,3,[4,[5,6[7,8[9, 0]]]]]]);
_.faltten([1,2,[3,[4,5]]],6); //只会扁平一层
_.flattenDepth([1,[2,[3,4,[5,[6]]]]],3); //扁平层数为depth