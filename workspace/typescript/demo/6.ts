class Book{
  constructor(private _author: string){}
  getName() {
    return this._author
  }
  setName(name: string) {
    this._author = name
  }
}

const hongluomeng = new Book('曹雪芹');
hongluomeng.setName('caoxueqin');
console.log(hongluomeng.getName());