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
	LINK: 'link'

};

/*
start:   NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log start /root/mywork/my_wechat/bin/www
restart: NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log restart /root/mywork/my_wechat/bin/www
stop:    NODE_ENV=development PORT=80 forever -a -l /root/mywork/my_wechat/my_wechat.log stop /root/mywork/my_wechat/bin/www
*/

exports.conf = conf;