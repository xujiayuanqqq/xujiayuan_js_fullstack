let zk = {};
zk.peopleList = [];
zk.listen = function(fn) {
    this.peopleList.push(fn);
}
zk.trigger = function() {
    for(var i = 0,fn; fn = this.peopleList[i++];) {
        fn.apply(this,arguments);
    }
}

zk.listen(function(msg) {
    console.log(`收到了你${msg}的信息，决定给红包`);
});
zk.listen(function(msg) {
    console.log(`收到了你${msg}的信息，作为情敌表示不开心`);
});
zk.trigger('xxx同学要结婚了');
zk.trigger('xxx同学生了大胖小子');