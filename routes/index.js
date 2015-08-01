var express = require('express');
var crypto = require('crypto');
var parseString = require('xml2js').parseString;

var conf = require('../conf').conf;

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
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
  parseString(req, function (err, result) {
    if(err) {
      console.log('error: ' + err);
    }
    console.log(result);
  });
});


module.exports = router;
