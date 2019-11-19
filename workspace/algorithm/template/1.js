//简单实现
let template = '我是{{name}},年龄{{age}},性别{{sex}}';
let data = {
    name: '姓名',
    age: 18
}
// function render(template,data) {
//     const reg = /\{\{(\w+)\}\}/;//模板字符串正则
//     if(reg.test(template)) { //判断模板里是否有模板字符串
//         const name = reg.exec(template)[1]; //查找当前模板里第一个模板字符串的字段
//         template = template.replace(reg,data[name]);//将第一个模板字符串渲染
//         return render(template,data);//递归的渲染并返回渲染后的结构
//     }
//     return template; //如果模板没有模板字符串直接返回
// }

//一行代码实现方式
function render(template,data) {
    return template.replace(new RegExp('{{(.*?)}}','g'),(match,key)=> data[key.trim()]);
}

console.log(render(template,data));//我是姓名，年龄18，性别undefined
