/**
 * Created by vinxent on 2015/8/1.
 */

var wechatRequest = require('./wechatRequest');
var conf = require('./conf');

wechatRequest.getAccessToken(conf.APPID, conf.APPSECRET).then(function (result) {
	console.log('getAccessToken: ---- ' + result);
	return wechatRequest.getUserInfo(result, 'oLA6FxM51sfkNQzGg5QzOG5q6bjg');
}).then(function (result) {
	console.log('userinfo: ---- ');
	console.log(result);
}, function (err) {
	console.log('err: ' + err);
});

