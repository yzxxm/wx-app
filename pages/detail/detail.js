// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    url: '/images/mypic.jpg',
    name:'张三',
    sex:'女',
    pai:'的肚子咕噜噜',
    user:'799573'
  },

  update:function(){
    wx.navigateTo({
      url: '/pages/update/update',
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
    console.log('detail-监听页面加载')
    wx.getStorage({
      key: 'userPic',
      success: (res) => {
        this.setData({
          url:res.data
        })
      },
      fail: () =>{
        this.setData({
          url:'/images/mypic.jpg'
        })
      }
    })
  },
  changeimg:function () {
    //获取本地头像
    wx.chooseImage({
      count: 1,                     //选择图片的数量
      sourceType:['album','camera'],//选择图片的来源
      success:(res)=>{
        console.log(res)
        this.setData({
          url:res.tempFilePaths[0]
        })
        //设置本地缓存
        wx.setStorage({
          data: res.tempFilePaths[0],//字段名对应的数据
          key: 'userPic',//本地存储的名字
          success:()=>{
            wx.showToast({
              title: '修改成功',
            })
          }
        })
      }
    })
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('detail-监听页面初次渲染完成')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('detail-监听页面显示')
    wx.getStorage({
      key: 'userInfo',
      success:(res)=>{
        this.setData({
          name:res.data.name,
          sex:res.data.sex=="woman"?"女":"男"  
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('detail-监听页面隐藏')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('detail-监听页面卸载')
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