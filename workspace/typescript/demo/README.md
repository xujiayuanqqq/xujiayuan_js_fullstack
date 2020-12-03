TypeScript中数组类型的定义
const numberArr: number[] = [1, 2, 3];
const stringArr: string[] = ["a", "b", "c"];
const undefinedArr: undefined[] = [undefined, undefined];
const arr: (number | string)[] = [1, "string", 2];

数组中对象类型的定义
const friends: { name: sting, age: Number }[] = [
  { name: 'Lily', age: 18 },
  { name: 'John', age: 20 }
];

const Friend = { name: string, age: Number }
或者
class Friend {
  name: string,
  age: number
}
const friends.Friend[] = [
  { name: 'Kate', age: 17 },
  { name: 'Ben', age: 20 }
]

TypeScript中元组的使用和类型约束
const friends: [string, string, number] = ['Joe', 'teacher', 27];
把数组中的每个元素类型的位置给固定住了，这就叫做元组

TypeScript中的interface接口
接口必须代表对象

TypeScript中类的概念和使用

访问类型
private protected public

public 允许在类内部和外部被调用
private 只允许在类的内部被调用，外部不允许调用
protected 允许在类内及子类中使用


构造函数
在子类里写构造函数时，必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作
就是父类没有构造函数，子类也要使用super()进行调用，否则就会报错
class Person{}
class Teacher extends Person{
  constructor(public age:number){
    super()
  }
}
const teacher = new Teacher(18);
console.log(teacher.age);

TypeScript类的Getter Setter static
private最大的用处就是封装一个属性，然后通过Getter和Setter的形式来访问和修改这个属性
static声明的属性和方法，不需要进行声明对象，就可以直接使用
class Girl {
  static sayHi() {
    return 'Hi'
  }
}
console.log(Girl.sayHi());

只读属性和抽象类
class Person {
  public readonly _name: string;
  constructor(name: string){
    this._name = name;
  }
}
const person = new Person('xiaomei');
person._name = 'xiaohong'; // 不可该，_name属性是只读属性
console.log(person.name);

include exclude files

include属性是用来指定要编译的文件的
{
  "include":["demo.ts"]
}

exclude不包含，除什么文件之外
{
  "exclude": ["demo2.ts"]
}

files的配置效果和include几乎一样，只要配置到里边的文件都可以编译
{
  "files": ["demo.ts"]
}

compilerOptions配置项
removeComments属性   告诉TypeScript对编译出来的js文件是否显示注释（注解）true => 在js中不显示注释
strict属性   true => 编译和书写规范要按照TypeScript最严格的规范来写
noImplicitAny属性  允许你的注解类型any不用特意表明
strictNullChecks属性  false 不强制检查NULL类型

ts-node遵循tsconfig.js

rootDir outDir

{
  "outDir": "./build",
  "rootDir": "./src" // ts文件放在src下
}

allowJs
"target":'es5' ,  // 这一项默认是开启的，你必须要保证它的开启，才能转换成功
"allowJs":true,   // 这个配置项的意思是联通

sourceMap属性
如果把sourceMap的属性去掉，在打包的过程中就会给我们生成sourceMap文件

noUnusedLocals noUnusedParameters

联合类型 类型保护
只有联合类型存在的情况下，才需要类型保护

联合类型 认为一个变量可能有两种或两种以上的类型
interface Waiter {
  anmo: boolean;
  say: () => {};
}
interface Teacher {
  anmo: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {} // 会报错

类型保护-类型断言

function judgeWho(animal: Waiter | Teacher) {
  if (animal.anmo) {
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).say();
  }
}

类型保护-in语法

function judgeWho(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}

类型保护-typeof语法

function add(first: string | number, second: string | number) {
  if (typeof first === 'string' || typeof second === 'string') {
    return `${first}${second}`;
  }
  return first + second;
}

类型保护-instanceof语法
类型保护是一个对象，可以使用instanceof语法

class NumberObj {
  count: number;
}

function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}

Enum枚举类型讲解
枚举类型的对应值
枚举类型是有对应的数字值的，默认是从0开始
枚举通过下标反查

TypeScript函数泛型（难点）

初识泛型概念-generic 泛指的类型
泛型定义使用<>(尖角号)进行定义
泛型中数组的使用
多个泛型的定义
泛型类型的推断

TypeScript类中泛型（难点）
基本类
初始类的泛型
泛型中的继承
泛型约束

初始命名空间-Namespace