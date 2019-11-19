//修改this的指向
//封装函数f，使f的this指向指定的对象
function bindThis(f,oTarget) {
    return function() {
        return f.apply(oTarget,arguments);
    }
}
