/*
* 路由器类
*/

module.exports = function (app) {
	
    //微信接口
    app.use('/', require('./routes/index'));

    //用户接口
    app.use('/user', require('./routes/users'));

};
