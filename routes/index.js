var express = require('express');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;

var Wechat = require('../common/wechat');    //微信模块

var router = express.Router();

var wechat = new Wechat();

/* 首页 */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'hello, 粑粑' });
});

/* 微信验证接口. */
router.get('/wechat', function(req, res, next) {

    var signature = req.param('signature');   //微信加密签名
    var timestamp = req.param('timestamp');   //时间戳
    var nonce = req.param('nonce');            //随机数
    var echostr = req.param('echostr');        //随机字符串

    if(wechat.check(timestamp, nonce, signature)) {
        res.end(echostr);     //通过
    } else {
        res.end('error');   //失败
    }
});

/* 微信消息处理接口 */
router.post('/wechat', wechat.init, function (req, res, nect) {
    
    var xml = req.xml;    //处理后的xml
    wechat.process(req, xml);    //处理后的xml

});

//发送微信文本消息
wechat.on('text', function(req, xml) {
    console.log('on:' + xml);
    res.end(xml);
});


module.exports = router;