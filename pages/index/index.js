import { get } from '../../utils/restUtil';

var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../express/express'
    })
  },
  bindClickHello: function() {
    wx.navigateTo({
      url: '../weather/weather'
    })
  },
  onLoad: function () {
    get('/bus/names/all', {}, function(data) {
      console.error(data);
    });
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
})
