/**
 * Created by vinxent on 2015/8/1.
 */
var conf = {
	TOKEN: 'your token here',
	TEXT: 'text',
	IMAGE: 'image',
	VOICE: 'voice',
	VIDEO: 'video',
	SHORTVIDEO: 'shortvideo',
	LOCATION: 'location',
	LINK: 'link',
	APPID: 'wx645b499c4950a4c3',
	APPSECRET: '8ed61397d934d4af3bcb4419acf3e83c'
};

conf.wechat = {
	accessTokenUrl: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={APPID}&secret={APPSECRET}',
	callbackIpUrl: 'https://api.weixin.qq.com/cgi-bin/getcallbackip?access_token={ACCESS_TOKEN}',
	userInfoUrl: 'https://api.weixin.qq.com/cgi-bin/user/info?access_token={ACCESS_TOKEN}&openid={OPENID}&lang=zh_CN'
};



/*
start:   NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log start /root/mywork/my_wechat/bin/www
restart: NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log restart /root/mywork/my_wechat/bin/www
stop:    NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log stop /root/mywork/my_wechat/bin/www
*/

module.exports = conf;