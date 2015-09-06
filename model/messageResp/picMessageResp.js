/**
 * Created by vinxent on 2015/8/1.
 */

var pic = {

};

pic.init = function(data) {
	var pic = {};
	pic.ToUserName = data.FromUserName;
	pic.FromUserName = data.ToUserName;
	pic.CreateTime = data.CreateTime;
	pic.MsgType = data.MsgType;
	pic.Image = {};
	pic.Image.MediaId = data.MediaId;
	return text;
};

exports.picMessageResp = pic;
