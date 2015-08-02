var express = require('express');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;


var wechat = require('../common/wechat').wechat;



var router = express.Router();

/* GET home page. */
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
router.post('/wechat', function (req, res, nect) {
  var tempData = '';  //接收到的消息
  req.on('data', function (chunk) {
    tempData += chunk;
  })
  req.on('end', function() {
    console.log('接收到的消息xml为： ' + tempData);
    parseString(tempData, {explicitArray: false, trim: true}, function (err, result) {
      var xml = wechat.process(result);    //处理后的xml
      res.end(xml);
    });
  });
});

module.exports = router;