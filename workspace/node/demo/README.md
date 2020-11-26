模块module和包
exports 模块公开的接口
require 从外部获取一个模块的接口，所获取模块exports对象，单次加载
module.exports = 对象
exports 本身仅仅是一个普通的空对象{} 专门用来声明接口，本质上通过它为模块闭包的内部建立了一个有限的访问接口。
不可以通过对exports直接赋值代替module.exports赋值。
exports实际上只是一个和module.exports指向同一个对象对变量，它本身会在模块执行结束后释放，但module不会，因此只能通过指定module.exports来改变访问接口。


包
包是在模块的基础上更深一步的抽象 将某个独立的功能封装起来，用于发布、更新、依赖管理和版本控制
开发了npm用来解决包的发布和获取需求
Node.js的包是一个目录 Node.js对包的要去没有那么严格，只有顶层目录下有package.json，并符合一些规范即可。
严格符合CommonJS规范的包具备以下特征：
1. package.json必须在包的顶层目录下
2. 二进制文件应该在bin目录下
3. JavaScript代码应该在lib目录下
4. 文档应该在doc目录下
5. 单元测试应该在test目录下

作为文件夹的模块

package.json
name: 包的名称 唯一 由小写英文字母、数字和下划线组成，不能包含空格
description: 包的简要说明
version: 符合语义化版本识别规范的版本字符串
keywords: 关键字数组，通常用于搜索
maintainers: 维护者数组，每个元素要包含name、email（可选）、web（可选）字段
contributors: 贡献者数组，格式与maintainers相同，包的作者应该是贡献者数组的第一个元素
bugs: 提交bug的地址，可以是网址或者电子邮件地址
licenses: 许可证数组，每个元素要包含type（许可证的名称）和url（链接到许可证文本的地址）字段
repositories: 仓库托管地址数组，每个元素要包含type（仓库的类型，如git）、url（仓库的地址）和path（相对于仓库的路径，可选）字段
dependencies: 包的依赖，一个关联数组，由包名称和版本号组成

本地模式  可通过require使用     没注册PATH
全局模式  不可通过require使用   注册PATH

包的发布
符合npm规范
通过使用npm init可以根据交互式问答产生一个符合标准的package.json
获取一个账号用于维护包 使用npm adduser根据提示输入用户名、密码、邮箱等待账号创建完成，完成后使用npm whoami测验是否取得了账号
在package.json所在的目录下运行npm publish 完成发布
包有更新 只需要在package.json文件中修改version字段，然后重新使用npm publish
使用npm unpublish命令来取消发布

命令后调试
node debug file
Node.js调试命令
run----------------------------------------------执行脚本，在第一行暂停
restart------------------------------------------重新执行脚本
cont, c------------------------------------------继续执行，直到遇到下一个断点                       
next, n------------------------------------------单步执行
step, s------------------------------------------单步执行并进入函数
out, o-------------------------------------------从函数中步出       
setBreakpoint(), sb()----------------------------在当前行设置断点
setBreakpoint('f()'), sb(...)--------------------在函数f的第一行设置断点
setBreakpoint('script.js', 20), sb(...)----------在script.js的第20行设置断点
clearBreakpoint, cb(...)-------------------------清除所有断点
backtrace, bt------------------------------------显示当前的调用栈
list(5)------------------------------------------显示当前执行到的前后5行代码
watch(expr)--------------------------------------把表达式expr加入监视列表
unwatch(expr)------------------------------------把表达式expr从监视列表移除
watchers-----------------------------------------显示监视列表中所有的表达式和值
repl---------------------------------------------在当前上下文打开即时求值环境
kill---------------------------------------------终止当前执行的脚本
scripts------------------------------------------显示当前已加载的所有脚本
version------------------------------------------显示V8的版本


远程调试
node --debug[=port] script.js
node --debug-brk[=port] script.js
node --debug 命令选项可以启动调试服务器，默认情况下调试端口是5858，也可以使用 --debug=1234 指定调试端口为1234
使用 --debug 选项运行脚本时，脚本会正常执行，但不会暂停，在执行过程中调试客户端可以连接到调试服务器
要求脚本暂停执行等待客户端连接，使用 --debug-brk 调试服务器在启动后会立刻暂停执行脚本，等待调试客户端连接
node --debug-brk 4.js

node debug 127.0.0.1:5858


事件驱动 events
events.EventEmitter
EventEmitter的核心就是事件发射与事件监听器功能的封装、支持若干个事件监听器
EventEmitter API
EventEmitter.on(event, listener)为指定事件注册一个监听器，接受一个字符串event和一个回调函数listener
EventEmitter.emit(event, [arg1], [...])发射event事件，传递若干可选参数到事件监听器的参数表
EventEmitter.once(event, listener)为指定事件注册一个单次监听器，即监听器最多只会触发一次，触发后立刻解除该监听器
EventEmitter.removeListener(event, listener)移除指定事件的某个监听器，listener必须是该事件已经注册过的监听器
EventEmitter.removeAllListener([event])移除所有事件的所有监听器，如果指定event，则移除指定事件的所有监听器

error事件
emitter.emit('error)
继承EventEmitter


文件系统fs
fs模块是文件操作的封装 提供了文件的读取、写入、更名、删除、遍历目录、链接等POSIX文件系统操作
提供了异步和同步两个版本 fs.readFile() fs.readFileSync()

fs.readFile(filename, [encoding], [callback(err,data)]) 必选参数filename

var fs = require('fs');
fs.readFile('content.txt', 'utf-8', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
})

fs.open(path, flags, [mode], [callback(err,fd)])
flags: r r+ w w+ a a+
mode默认值0666

fs.read(fd, buffer, offset, length, position, [callback(err,bytesRead,buffer)])


HTTP服务器
http.server是http模块中的HTTP服务器对象
response.writeHead(statusCode, [headers]): 向请求的客户端发送相应头 statusCode是HTTP状态码，headers是一个类似关联数组的对象，表示响应头的每个属性，该函数在一个请求内最多只能调用一次，如果不调用，则会自动生成一个响应头
response.write(data, [encoding]): 向请求的客户端发送响应内容 data是一个Buffer或字符串，表示要发送的内容。如果data是字符串，那么需要指定encoding来说明它的编码方式，默认是utf-8，在response.end调用之前，response.write可以被多次调用
response.end([data], [encoding]): 结束响应 告知客户端所有发送已经完成 当所有要返回的内容发送完毕的时候，该函数必须被调用一次 如果不调用该函数，客户端将永远处于等待状态

HTTP客户端
http.request http.get 作为客户端向HTTP服务器发起请求
http.request(options, callback)发起HTTP请求
option常用的参数：
host:      请求网站的域名或IP地址
port:      请求网站的端口，默认8
method:    请求方法，默认是GET
path:      请求的相对于根的路径，默认是'/' QueryString应该包含在其中 /search?query=byvoid
headers:   一个关联数组对象，为请求头的内容
callback 传递一个参数，为http.ClientResponse的实例
http.request返回一个http.ClientRequest的实例

http.ClientRequest
request.abort()
http.ClientResponse


