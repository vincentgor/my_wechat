/**
 * Created by vinxent on 2015/8/2.
 * 微信模块
 */
var events = require('events');
var crypto = require('crypto');
var xml2js = require('xml2js');
var builder = new xml2js.Builder({rootName: 'xml', headless:true});   //去掉xml格式说明
var parseString = xml2js.parseString;
var util = require('util');

var conf = require('../conf').conf;
var TReq = require('../model/messageReq/textMessageReq').textMessageReq;
var TResp = require('../model/messageResp/textMessageResp').textMessageResp;

//微信处理类
var wechat = function() {
    events.EventEmitter.call(this);
};

util.inherits(wechat, events.EventEmitter);

wechat.prototype.write = function(res, xml) {
    this.emit('text', res, xml);
}

//解析收到的数据
wechat.prototype.init = function (req, res, next) {
    var tempData = '';  //接收到的消息
    req.on('data', function (chunk) {
        tempData += chunk;
    })
    req.on('end', function() {
        console.log('接收到的消息xml为： ' + tempData);
        parseString(tempData, {explicitArray: false, trim: true}, function (err, result) {
            req.xml = result.xml;    //将收到的数据保存在req
            next();
        });
    });
}

/* 验证微信消息的合法性 */
wechat.prototype.check = function (timestamp, nonce, signature) {
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

/* 处理微信消息 */
wechat.prototype.process = function (res, xmlData) {
    var textReq = TReq.init(xmlData);

    //逻辑处理
    textReq.Content = '你发送的是： ' + textReq.MsgType + ' 消息啦啦啦';
    textReq.MsgType = conf.TEXT;

    //响应消息
    var textResp = TResp.init(textReq);
    console.log(textResp);
    var xml = builder.buildObject(textResp);
    console.log('write前----------------------');
    this.write(res, xml);
    // return xml;
};

//导出模块
module.exports = wechat;