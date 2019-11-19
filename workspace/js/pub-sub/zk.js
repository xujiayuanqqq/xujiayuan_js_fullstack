// Publish 多个 Subscriber
// pub-sub
// 发布者
let zk = {};
// 订阅者
zk.peopelList = [];
// 2018年10月1日大婚
// 做何反应？
zk.listen = function(fn) {
    this.peopelList.push(fn);
}
zk.trigger = function() {
    // ? 消息发出后， 所有的订阅者做出反应
    for(var i = 0,fn; fn = this.peopelList[i++];) {
        fn.apply(this,arguments);
    }
}
// 订阅者的过程
zk.listen(function(msg) {
    console.log(`收到了你${msg}的信息，决定给红包`);
});
zk.listen(function(msg) {
    console.log(`收到了你${msg}的信息，决定给大红包`);
});
zk.listen(function(msg) {
    console.log(`收到了你${msg}的信息，作为情敌表示不开心`);
});

zk.trigger('XXX同学要结婚了');
zk.trigger('XXX同学生了大胖小子');

// zk.listen(function(hhh,shabi) {
//     console.log(ljh);
//     console.log(shabi)
// });
// zk.trigger("","");