class chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
    }
    constructor({ newColor = "green"} = {}) {
        this.newColor = newColor;
    }
}

const freddie = new chameleon({newColor: "purple"});
console.log(freddie.colorChange("orange")); //TypeError

//colorChange方法是静态的。静态方法仅在创建它们的构造函数中存在，并且不能传递给任何子级。
//由于freddie是一个子级对象，函数不会传递，所在freddie实例上不存在freddie方法，抛出TypeError。