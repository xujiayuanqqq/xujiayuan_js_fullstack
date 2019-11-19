const privateData = new WeakMap();

class Person {
    constructor (name, age) {
        privateData.set(this, { name , age });
    }

    getName() {
        return privateData.get(this).name;
    }

    getAge() {
        return privateData.get(this).age;
    }

}

const zk = new Person('zk', 18);
console.log(zk.getName());

// 引用
// zk.name = '曾凯';
// public 属性公开， 外

// node --expose-gc
// global.gc();
// process.memoryUsage(); -> 内存使用情况
