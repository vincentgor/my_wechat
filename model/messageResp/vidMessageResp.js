/**
 * Created by vinxent on 2015/8/1.
 */

var vid = {

};

vid.init = function(data) {
    var vid = {};
    vid.ToUserName = data.FromUserName;
    vid.FromUserName = data.ToUserName;
    vid.CreateTime = data.CreateTime;
    vid.MsgType = data.MsgType;
    vid.Video = {};
    vid.Video.MediaId = data.MediaId;
    vid.Video.Title = data.Title;
    vid.Video.Description = data.Description;
    return vid;
};

exports.vidMessageResp = vid;
