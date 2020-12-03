class Teacher {
  subject = 'math';
  teachType() {
    return this.subject;
  }
}
const mathTeacher = new Teacher();
console.log(mathTeacher.teachType());

class EnglishTeacher extends Teacher {
  teachInfo() {
    return 'Hello,everybody';
  }
  sayBy() {
    return 'goodby';
  }
}

const english = new EnglishTeacher();
console.log(english.teachType());