// 基本类
// class SelectBook {
//   constructor(private books: string[]) {}
//   getBook(index: number): string {
//     return this.books[index];
//   }
// }
// const selectBook = new SelectBook(['红楼梦', '西游记', '三国演义', '水浒传']);
// console.log(selectBook.getBook(1));

interface Classic {
  name: string,
  author: string
}

// 初始类的泛型
class SelectBook<T extends Classic> {
  constructor(private books: T[]) {}
  getBook(index: number): string {
    return this.books[index].author + '著作' + this.books[index].name;
  }
}
// const selectBook = new SelectBook< string >(['红楼梦', '西游记', '三国演义', '水浒传']);
const selectBook = new SelectBook([
  { name: '红楼梦', author: '曹雪芹' },
  { name: '西游记', author: '吴承恩' },
  { name: '三国演义', author: '罗贯中' },
  { name: '水浒传', author: '施耐庵' }
])
console.log(selectBook.getBook(2));