/**
 * Created by vinxent on 2015/8/1.
 */

var Text = function () {

};

Text.init = function(data) {
  var text = {};
  text.ToUserName = data.FromUserName;
  text.FromUserName = data.ToUserName;
  text.CreateTime = data.CreateTime;
  text.MsgType = data.MsgType;
  text.Content = data.Content;
  return text;
};

exports.textMessageResp = Text;
