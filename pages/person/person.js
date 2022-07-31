// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {
      authUrl: '/images/mypic.jpg',
      nickName: '一只小小满'
    }
  },

  person:function(){
    wx.redirectTo({
      url: '/pages/order/order',
    })
  },
  detail:function(){
    wx.navigateTo({
      url: '/pages/detail/detail',
    })
  },
  
  call:function(){
    //
    wx.makePhoneCall({
      phoneNumber:'12345678901',
    })
  },
  advice:function(){
    wx.navigateTo({
      url: '/pages/advice/advice',
    })
  },
  about:function(){
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  address:function(){
    //先从本地获取所有地址信息
    wx.getStorage({
      key:'myAddress',
      //如果能获取到，说明已经有数据，不需要额外设置，直接跳转即可
      success:() => {},
      fail:() =>{
        wx.setStorage({
          key: 'myAddress',
          data: [
            {
              name: '江西刘亦菲',
              email: 432000,
              area: ['江西省','萍乡市' ,'安源区'],
              address: '航海中路海为科技园C座xxx号',
              tel: 12345678912,
              states: 1//作为默认地址页面，值为1就是在收货地址页显示的页面，值为0，则不显示
            },
            {
              name: '杨先生',
              email: 432000,
              area: ['河南省',' 郑州市',' 惠济区'],
              address: '文化路xx号',
              tel: 98765432101,
              states: 0
            },
            {
              name: '河南吴彦祖',
              email: 432000,
              area: ['河南省','郑州市','新密市'],
              address: '溱水路618号',
              tel: 12345678910,
              states: 0
            }
          ],
        })
      }
    })
    wx.navigateTo({
      url: '/pages/address/address',
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