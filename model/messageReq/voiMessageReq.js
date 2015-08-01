/**
 * Created by vinxent on 2015/8/1.
 */

var Voi = function () {

};

Voi.init = function(data) {
  var voi = {};
  voi.ToUserName = data.ToUserName;
  voi.FromUserName = data.FromUserName;
  voi.CreateTime = data.CreateTime;
  voi.MsgType = data.MsgType;
  voi.Content = data.Content;
  voi.MsgId = data.MsgId;
  return voi;
};

exports.voiMessageReq = Voi;
