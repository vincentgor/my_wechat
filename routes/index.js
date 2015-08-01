var express = require('express');
var crypto = require('crypto');
var conf = require('../conf');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/check', function(req, res, next) {
  var signature = req.param('signature');   //微信加密签名
  var timestamp = req.param('timestamp');   //时间戳
  var nonce = req.param('nonce');            //随机数
  var echostr = req.param('echostr');        //随机字符串

  var tmpArr =[conf.TOKEN,timestamp,nonce];
  tmpArr.sort();
  console.log(tmpArr[0]+tmpArr[1]+tmpArr[2]);
  var str = tmpArr.join('');
  var shasum = crypto.createHash('sha1');
  shasum.update(str);
  var d = shasum.digest('hex');
  console.log(d);
  console.log(signature);
  if(d==signature) {
    res.end(echostr);
  } else {
    console.log('error');
    res.end('error');
  }
  //res.render('index', { title: 'Express' });
});



module.exports = router;
