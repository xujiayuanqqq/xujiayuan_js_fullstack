// 截流throttle, debounce防抖 都为解决高频事件而来 scroll mousewheel mousemover mousemove touchemove onresize
// debounce 防抖都为解决 在规定时间执行一次，后执行
const utils = {
    // 帮忙method执行的次数在规定时间内只有一次
    // method执行时， 函数内的this指向pureFullPage
    // this.container

    // 截流
    throttle(method, context, delay) {
        // args?
        // 返回的函数就是等下事件执行的真正的函数体
        // 闭包
        let wait = false;
        return function (...args) {
            // console.log(args);
            // method this 指向window
            // args? event对象
            // 执行时， 上下文环境要跟以前一样
            if (!wait) {
                method.apply(context, args);
                wait = true;
            }
            setTimeout(() => {
                wait = false;
            }, delay)
        }
    },
    // 防抖
    debounce(method, context, event, delay) {
        // window.resize 不要急， 等一下再执行
        clearTimeout(context.tId);
        // 定时器保持它的名字？
        // js 动态语言，
        context.tId = setTimeout(() => {
            method.call(context, event);
        }, delay)
    },
    getWheelDelta (event) {
        // console.log(event);
        if (event.wheelDelta) {
            this.getWheelDelta = event => event.wheelDelta;             
            return event.wheelDelta;
        }
        // chrome
        // this.getWheelDelta = event => -event.detail; 
        // return -event.detail;
    }
}