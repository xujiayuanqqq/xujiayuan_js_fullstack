class Lesson {
  public name: string;
  public sayHi() {
    console.log(this.name);
    return 'welcome to learn these lessons';
  }
  constructor(name: string){
    this.name = name;
  }
}

class Subject extends Lesson {
  constructor(public amount: number) {
    super('frontEnd')
  }
  public sayBye() {
    return this.name;
  }
}

const lesson = new Subject(100);
console.log(lesson.name);
console.log(lesson.amount);
console.log(lesson.sayHi());
console.log(lesson.sayBye());