console.log(+true); // 1
console.log(!"lily"); // false

// 一元加号会尝试将boolean类型转换成数字类型。true被转换成1，false被转换成0.
//字符串"lily"是一个真值。实际要问的是"这个真值是假的吗？"这会返回false