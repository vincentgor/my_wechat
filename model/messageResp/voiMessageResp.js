/**
 * Created by vinxent on 2015/8/1.
 */

var Voi = function () {

};

Voi.init = function(data) {
  var voi = {};
  voi.ToUserName = data.FromUserName;
  voi.FromUserName = data.ToUserName;
  voi.CreateTime = data.CreateTime;
  voi.MsgType = data.MsgType;
  voi.Voice = {};
  voi.Voice.MediaId = data.MediaId;
  return voi;
};

exports.picMessageResp = Voi;
