/**
 * Created by vinxent on 2015/8/2.
 * 微信模块
 */
var crypto = require('crypto');
var xml2js = require('xml2js');
var builder = new xml2js.Builder({rootName: 'xml', headless:true});   //去掉xml格式说明

var conf = require('../conf').conf;
var TReq = require('../model/messageReq/textMessageReq').textMessageReq;
var TResp = require('../model/messageResp/textMessageResp').textMessageResp;

//微信处理类
var Wechat = function() {

}

/* 验证微信消息的合法性 */
Wechat.check = function (timestamp, nonce, signature) {
  var tmpArr =[conf.TOKEN,timestamp,nonce];
  tmpArr.sort();
  var str = tmpArr.join('');
  console.log('排序后： '+str);
  var sha1 = crypto.createHash('sha1');
  sha1.update(str);
  var checkedStr = sha1.digest('hex');
  console.log('sha1加密后:  ' + checkedStr);
  return checkedStr==signature;
};

Wechat.process = function (result) {
  var textReq = TReq.init(result.xml);

  //逻辑处理
  textReq.Content = '你发送的是： ' + textReq.MsgType; + ' 消息啦啦啦'
  textReq.MsgType = 'text';

  //响应消息
  var textResp = TResp.init(textReq);
  console.log(textResp);
  var xml = builder.buildObject(textResp);
  return xml;
};

exports.wechat = Wechat;