// console.log("工厂模式");
// 函数属于对象
// 函数是一等对象
// 类，简单的只有一个构造函数
// 类跟函数没有区别
// js 本身并没有类只是用的人多了，给了这个实现。
// js 只有对象 Object的原型对象的始祖
// 原型 prototype 
// js 不需要传统的继承， 只要有个参照物就可以实现原型示继承
function Bicycle(){
    // 构造函数 construsctor
    // new时执行，
    // this.brand = brand || '凤凰'
}

// 原型 凤凰...
// 二维码
// 手机支付
// js 继承关系，不是
// 共享单车，完全颠覆了自行车,
Bicycle.prototype = {
    sellBicycle: function(model){
        var bicycle = null;
        switch(model){
            case 'Giant': 
                bicycle = new Giant()
            break;
            case 'The Speedster Ster': 
                bicycle = new Speedster()
            break;
            case 'YouTube': 
                bicycle = new YouTube()
            break;
        }
        // 把车卖出去
        bicycle.assemble();
        // bicycle.wash();
        // bicycle.provideRepair();
        return bicycle
        // console.log("卖车了...");
        // return null;
        // 面向对象们
        // 卖车， 商店， 很多车， 维修人员， 仓库人员

    }
}


//雷速达
function Speedster(){
}
Speedster.prototype = {
    assemble: function(){
        console.log("已经为你组装好自行车");
    },
    wash: function(){
        console.log("已经为你洗好自行车");
    },
    provideRepair: function(){
        console.log("保修二年");
    }
}
//捷安特
function Giant(){
}
Giant.prototype = {
    assemble: function(){
        console.log("已经为你组装好自行车");
    },
    wash: function(){
        console.log("已经为你洗好自行车");
    },
    provideRepair: function(){
        console.log("保修一年");
    }
}
// YouTube
function YouTube(){
}
YouTube.prototype = {
    assemble: function(){
        console.log("已经为你组装好自行车");
    },
    wash: function(){
        console.log("已经为你洗好自行车");
    },
    provideRepair: function(){
        console.log("保修三年");
    }
}


var bicycle = new Bicycle();
console.log(bicycle.sellBicycle('Giant'));

// js 基础类型 字符串 数字  bool 布尔值 null 为空 undefined  
// 复杂类型 object<-prototype  array , function`` json
// symbol
// 六大基本类型 一个复杂类型