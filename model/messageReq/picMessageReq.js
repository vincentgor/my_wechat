/**
 * Created by vinxent on 2015/8/1.
 */

var pic = {

};

pic.init = function(data) {
	var pic = {};
	pic.ToUserName = data.ToUserName;
	pic.FromUserName = data.FromUserName;
	pic.CreateTime = data.CreateTime;
	pic.MsgType = data.MsgType;
	pic.PicUrl = data.PicUrl;
	pic.MediaId = data.MediaId;
	pic.MsgId = data.MsgId;
	return pic;
};

exports.picMessageReq = pic;
