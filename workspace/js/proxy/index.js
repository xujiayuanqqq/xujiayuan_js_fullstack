// 小明表白的故事
// 小明 talk in js
// js 具有强大的表现力
// js 弱类型语言  java 静态强类型语言
// js 基础类型 字符串 数字 
// 对象{} array , function``
// symbol
// bool 布尔值 null 为空 undefined  
// 六大基本类型 一个复杂类型
var xiaoming = {
    hasGirlFriend: false,
    name: '小明',
    age: 21,
    job: null,
    city: undefined,
    //方法 行为
    sendFlower: function(target){
        //1 买花
        var flower = new Flower('满天星');
        if(typeof target.receiveFlower == 'function'){
            target.receiveFlower(flower,this.name);
        }else{
            console.log('拿到名企前是不可以谈恋爱的。');
        }
        
    }
}
// 空的对象字面量
var xueba = {

}

// 具有详述性， 最容易创造的对象
var xiaomei = {
    name: "小美",
    age: 20,
    room: '9栋2201',
    hometown: '九江',
    // 监听好心情
/*
*功能：提供心情监听
*参数：fn 类型函数
*在一段时间后，心情好了，将fn执行
*/ 
    listenGoodMood: function(fn){
        setTimeout(function(){
            fn();
        },10000);
        // typeof fn === 'function'
        // fn();
    },
    receiveFlower: function(flower,sender){
        console.log("收到" + sender+ "送的" + flower.type);
    }
}

var xiaoxue = {
    name: "小雪",
    age: 20,
    room: '9栋2201',
    hometown: '九江',

    receiveFlower: function(flower,sender){
        xiaomei.listenGoodMood(function(){
            xiaomei.receiveFlower(flower,sender);
        })
        // if(xiaomei.mood == 'happy'){
        //     
        // }else{
        //     console.log("下次再来");
        // }
        // 实现了同样的收花方法, 接口interface
        // 小雪和小美都实现了同样的方法， 实现了相同的接口
        // 只要实现了相同的接口就可以互换对象
    }
}

// 类大写 对象小写
var Flower = function(type){
    this.type = type || '玫瑰'
}
xiaoming.sendFlower(xiaoxue);