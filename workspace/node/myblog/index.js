const express = require('express');
const app = express()
const path = require('path')
const indexRouter = require('./routes/index');
const userRouter = require('./routes/users');

app.get('/',(req,res) => {
    res.send('hello,world');
});

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');


app.use((req, res, next) => {
    console.log('1');
    next(new Error('haha'));
})

// 中间件 middleware  数组 顺序， 从上到下， 用一组中间件(函数) 来为用户提供服务。 next() 转交控制权， res.end()结束这次服务。
app.use((req, res, next) => {
    console.log('2');
    // res.status(200).end()
    next();
})


// 启用中间件 路由中间件
app.use('/',indexRouter);

app.use('/users',userRouter);

// 异常捕获
app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(500).send('Something broke');
})

// app.get('/users/:name',function(req,res) {
//     res.send('hello,'+req.params.name);
// });

app.listen(3000);