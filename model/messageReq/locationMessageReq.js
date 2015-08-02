/**
 * Created by vinxent on 2015/8/1.
 */

var Location = function () {

};

Location.init = function(data) {
  var location = {};
  location.ToUserName = data.ToUserName;
  location.FromUserName = data.FromUserName;
  location.CreateTime = data.CreateTime;
  location.MsgType = data.MsgType;
  location.MediaId = data.MediaId;
  location.ThumbMediaId = data.ThumbMediaId;
  location.MsgId = data.MsgId;
  return location;
};

exports.locationMessageReq = Location;
