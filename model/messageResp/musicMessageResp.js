/**
 * Created by vinxent on 2015/8/1.
 */

var Music = function () {

};

Music.init = function(data) {
  var music = {};
  music.ToUserName = data.FromUserName;
  music.FromUserName = data.ToUserName;
  music.CreateTime = data.CreateTime;
  music.MsgType = data.MsgType;
  music.Music = {};
  music.Music.Title = data.Title;
  music.Music.Description = data.Description;
  music.Music.MusicUrl = data.MusicUrl;
  music.Music.HQMusicUrl = data.HQMusicUrl;
  music.Music.ThumbMediaId = data.ThumbMediaId;
  return music;
};

exports.musicMessageResp = Music;
