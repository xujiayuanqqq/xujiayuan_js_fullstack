// 不可以被实例化， 怎么实现？
// ObjectFactory instanceof
function ClassCannotInstance() {
    // ClassCannotInstance() 可以执行
    // new ClassCannotInstance() 不可以被执行
    if (this instanceof ClassCannotInstance) {
        // console.log('不可以被执行');        
        throw new Error('不能被实例化');
    } else {
        console.log('可以执行');
    }
}
// ClassCannotInstance();
const instance = new ClassCannotInstance();