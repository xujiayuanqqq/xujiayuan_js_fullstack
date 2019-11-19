实现一个简单的模板引擎
let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
render(template,data); //我是姓名，年龄18，性别undefined