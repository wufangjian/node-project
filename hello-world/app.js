// 1.引入依赖
// 2.设置相关配置
// 3.链接数据库
// 4.定义中间件
// 5.定义路由
// 6.开启服务
// 7.在多核系统启动cluster多核处理模块(可选)


var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

app.set('appName', 'hello-world');

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.all('*', function (req, res) {
    res.render('index', {'msg': 'welcome to the practical node.js'});
});

http.createServer(app).listen(app.get('port'), function () {
    console.log('server listening port' + app.get('port'));
});