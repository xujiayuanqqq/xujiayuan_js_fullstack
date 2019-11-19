// const arr = [1,2,3];
// const func = function() {}
// const obj = {};
// Object 来自 function() {}
// 构造函数有prototype属性 对象__proto__
// console.log(arr instanceof Array);
// console.log(Array.prototype.isPrototypeOf(arr));
// console.log(Object.prototype.toString.call(arr));
// console.log(Object.prototype.toString.call(func));
// console.log(Object.prototype.toString.call(obj));
// console.log(Array.isArray(arr));

const zk = {
    name: '曾凯',
    toString: function() {
        return `${this.name}是鸠摩智大师喜欢的程序员`;
    }
}
console.log(zk.toString());
// 序列化 "{name:'曾凯'，habit:'交友'}"
// console.log(JSON.stringify(zk));