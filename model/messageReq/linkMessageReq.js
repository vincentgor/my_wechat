/**
 * Created by vinxent on 2015/8/1.
 */

var Link = function () {

};

Link.init = function(data) {
  var link = {};
  link.ToUserName = data.ToUserName;
  link.FromUserName = data.FromUserName;
  link.CreateTime = data.CreateTime;
  link.MsgType = data.MsgType;
  link.MediaId = data.MediaId;
  link.ThumbMediaId = data.ThumbMediaId;
  link.MsgId = data.MsgId;
  return link;
};

exports.linkMessageReq = Link;
