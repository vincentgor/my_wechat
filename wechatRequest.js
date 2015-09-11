var https = require('https');
var Promise = require('promise');
var conf = require('./conf');

var wechatRequest = {};

//获取access_token
wechatRequest.getAccessToken = function (appId, appSecret) {
	return new Promise(function (fulfill, reject) {
		var url = conf.wechat.accessTokenUrl;
		url = url.replace('{APPID}', appId);
		url = url.replace('{APPSECRET}', appSecret);
		console.log(url);
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				chunk = JSON.parse(chunk);
				if(chunk && chunk.errcode) {
					reject(chunk.errcode);
				} 
				if(chunk) {
					fulfill(chunk.access_token);
				}
			});
		}).on('error', function (err) {
			reject(e.message);
		});
	});
};

//获取微信服务器的IP地址列表
wechatRequest.getCallbackIp = function (accessToken) {
	return new Promise(function (fulfill, reject) {
		var url = conf.wechat.callbackIpUrl;
		url = url.replace('{ACCESS_TOKEN}', accessToken);
		console.log(url);
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				chunk = JSON.parse(chunk);
				if(chunk && chunk.errcode) {
					reject(chunk.errcode);
				} 
				if(chunk) {
					fulfill(chunk.ip_list);
				}
			});
		}).on('error', function (err) {
			reject(e.message);
		});
	});
};

//获取user_info
wechatRequest.getUserInfo = function (accessToken, openId) {
	return new Promise(function (fulfill, reject) {
		var url = conf.wechat.userInfoUrl;
		url = url.replace('{ACCESS_TOKEN}', accessToken);
		url = url.replace('{OPENID}', openId);
		console.log(url);
		https.get(url, function (res) {
			res.on('data', function (chunk) {
				chunk = JSON.parse(chunk);
				if(chunk && chunk.errcode) {
					reject(chunk.errcode);
				} 
				if(chunk) {
					fulfill(chunk);
				}
			});
		}).on('error', function (err) {
			reject(e.message);
		});
	});
};

//导出模块
module.exports = wechatRequest;