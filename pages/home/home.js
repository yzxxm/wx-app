Page({

  /**
   * 页面的初始数据
   */
  data: {
    playFlag:false,//自定义音乐播放的标识true为播放，false为不播放
  },


  playMusic:function(){
    //通过音乐标签的ID获取创建音乐标签的实例
    var music = wx.createAudioContext('music')
    if(this.data.playFlag){
      //如果音乐在播放，点击时需要暂停音乐
      music.pause()
    }else{
      //如果音乐在暂停，点击时需要播放音乐
      music.play()
    }
    //更改判断标识
    this.setData({
      playFlag: !this.data.playFlag
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})