/**
 * Created by vinxent on 2015/8/1.
 */

var shortVid = {

};

shortVid.init = function(data) {
	var shortVid = {};
	shortVid.ToUserName = data.ToUserName;
	shortVid.FromUserName = data.FromUserName;
	shortVid.CreateTime = data.CreateTime;
	shortVid.MsgType = data.MsgType;
	shortVid.MediaId = data.MediaId;
	shortVid.ThumbMediaId = data.ThumbMediaId;
	shortVid.MsgId = data.MsgId;
	return shortVid;
};

exports.shortVidMessageReq = shortVid;
