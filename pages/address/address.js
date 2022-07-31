// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:''

  },

  myAddress:function(){
    wx.navigateTo({
      url: '/pages/myAddress/myAddress',
    })
  },

  detail:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('address-监听页面加载')
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('address-监听页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('address-监听页面显示')
    wx.getStorage({
      key: 'myAddress',
      success:(res)=>{
        var flag = false
        console.log(res.data)
        //res.data中存有多条地址，展示时只要一个默认地址
        //遍历地址数组，找到states为1的数据，把这个为1的信息展示在页面当中
        for(var i = 0;i<res.data.length;i++){
          if(res.data[i].states == 1){
            this.setData({
              msg:res.data[i]
            })
            flag = true
          }
        }
        if(!flag){
          this.setData({
            msg:""
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('address-监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('address-监听页面卸载')
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