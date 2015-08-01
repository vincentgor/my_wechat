var express = require('express');
var crypto = require('crypto');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;

var conf = require('../conf').conf;
var TReq = require('../model/messageReq/textMessageReq').textMessageReq;
var TResp = require('../model/messageResp/textMessageResp').textMessageResp;

var parse = new xml2js.Parser;
var builder = new xml2js.Builder({rootName: 'xml', headless:true});   //去掉xml格式说明

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* 微信验证接口. */
router.get('/wechat', function(req, res, next) {
  var signature = req.param('signature');   //微信加密签名
  console.log('signature: ' + signature);
  var timestamp = req.param('timestamp');   //时间戳
  console.log('timestamp: ' + timestamp);
  var nonce = req.param('nonce');            //随机数
  console.log('nonce: ' + nonce);
  var echostr = req.param('echostr');        //随机字符串
  console.log('echostr: ' + echostr);
  var tmpArr =[conf.TOKEN,timestamp,nonce];
  tmpArr.sort();
  var str = tmpArr.join('');
  console.log('排序后：'+str);
  var shasum = crypto.createHash('sha1');
  shasum.update(str);
  var d = shasum.digest('hex');
  console.log(d);
  if(d==signature) {
    res.end(echostr);
  } else {
    console.log('error');
    res.end('error');
  }
  //res.render('index', { title: 'Express' });
});

/* 微信消息处理接口 */
router.post('/wechat', function (req, res, nect) {
  var tempData = '';
  req.on('data', function (chunk) {
    tempData += chunk;
  })
  req.on('end', function() {
    console.log(tempData);
    parseString(tempData, {explicitArray: false, trim: true}, function (err, result) {
      var textReq = TReq.init(result.xml);
      console.log(result);
      console.log(textReq);

      //逻辑处理
      textReq.Content = '你发送的是： ' + textReq.MsgType;
      textReq.MsgType = 'text';

      //响应消息
      var textResp = TResp.init(textReq);
      console.log(textResp);
      var xml = builder.buildObject(textResp);
      console.log(xml);
      res.end(xml);
      return;
    });
  });
});

module.exports = router;
