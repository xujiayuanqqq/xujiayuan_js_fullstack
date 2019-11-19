const shape = {
    radius:10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter()); // 20
console.log(shape.perimeter()); // NaN

// diameter是普通函数
// perimeter是箭头函数  对于箭头函数，this关键字指向是它所在的上下文环境（定义时的位置），与普通环境不同。
// 当调用perimeter时，它不是指向shape对象，而是指其定义时的环境（window）。没有radius属性，返回undefined。