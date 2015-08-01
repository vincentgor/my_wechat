var express = require('express');
var crypto = require('crypto');
var xml2js = require('xml2js');
var parseString = xml2js.parseString;

var conf = require('../conf').conf;
var TReq = require('../model/textMessageReq').textMessageReq;
var TResp = require('../model/textMessageResp').textMessageResp;

var paser = new xml2js.Parser;
var builder = new xml2js.Builder;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var xml = builder.buildObject({a:'11', b:'22'});
  res.end(xml);
//  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/check', function(req, res, next) {
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

router.post('/check', function (req, res, nect) {

  var data = '';
  req.on('data', function (chunk) {
    data += chunk;
  })
  req.on('end', function() {
    console.log(data);
    parseString(data, {explicitArray: false, trim: true}, function (err, result) {
      var textReq = TReq.init(result);
      console.log(textReq);

      //逻辑处理
      textReq.content = '傻逼';

      //响应消息
      var textResp = TResp.init(textReq);
      console.log(textResp);
      var xml = builder.buildObject(textResp);
      res.end(xml);
      return;
    });
  });
  res.end('');

});


module.exports = router;
