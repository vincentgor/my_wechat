/**
 * Created by vinxent on 2015/8/1.
 */

var vid = {

};

vid.init = function(data) {
	var vid = {};
	vid.ToUserName = data.ToUserName;
	vid.FromUserName = data.FromUserName;
	vid.CreateTime = data.CreateTime;
	vid.MsgType = data.MsgType;
	vid.MediaId = data.MediaId;
	vid.ThumbMediaId = data.ThumbMediaId;
	vid.MsgId = data.MsgId;
	return vid;
};

exports.vidMessageReq = vid;
