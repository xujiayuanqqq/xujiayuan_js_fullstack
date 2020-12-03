// 接口
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [anything: string]: any;
  say(): string;
}
const getResume = (girl: Girl) => {
  console.log(girl.name + '年龄是：' + girl.age);
  console.log(girl.name + '胸围是：' + girl.bust);
  girl.waistline && console.log(girl.name + '腰围是：' + girl.waistline);
  girl.sex && console.log(girl.name + '性别是：' + girl.sex);
};
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >=90 && console.log(girl.name + '进入面试');
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'));
};
const girl = {
  name: '小红',
  age: 18,
  bust: 94,
  waistline: 21,
  sex: '女',
  say() {
    return 'Welcome'
  }
};
// 类与接口的结合
class Person implements Girl {
  name = '小梅';
  age = 18;
  bust = 90;
  say() {
    return 'my name is xxx';
  }
}
// 接口间的继承
interface Teacher extends Girl {
  teach(): string
}
screenResume(girl);
getResume(girl);
// const screenResume = (name: string, age: number, bust: number) => {
//   console.log(name + '年龄是：' + age);
//   console.log(name + '胸围是：' + bust);
//   age < 24 && bust >=90 && console.log(name + '进入面试');
//   age > 24 || (bust < 90 && console.log(name + '你被淘汰'));
// }

// screenResume('小红', 18, 94);
// screenResume('小梅', 20, 88);