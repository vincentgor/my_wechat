/**
 * Created by vinxent on 2015/8/1.
 */

var Text = function () {

};

Text.init = function(data) {
  var text = {};
  text.ToUserName = data.ToUserName;
  text.FromUserName = data.FromUserName;
  text.CreateTime = data.CreateTime;
  text.MsgType = data.MsgType;
  text.Content = data.Content;
  text.MsgId = data.MsgId;
  return text;
};

exports.textMessageReq = Text;
