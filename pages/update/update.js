// pages/update/update.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    sex:'',
    pai:'',
  },


  radiochange:function(e){
    console.log(e.detail.value)
    //单选按钮选择后，把对应的value值存在sex变量中
    this.setData({
      sex:e.detail.value
    })
  },

  submitForm:function(e){
    console.log(e.detail)
    if(e.detail.value.name && e.detail.value.sex){
      wx.setStorage({
        data: e.detail.value,
        key: 'userInfo',
        success: () => {
          //返回之前的页面，只有在使用navigateTo方法跳转后才可以用
          wx.navigateBack({
            delta: 1,//回到上一层
          })
          console.log(e.detail.value);
        }
      })
    }else{
      wx.showToast({
        title: '请填写完数据再提交',
        icon:'none',
        duration:2000
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:'userInfo',
      success: (res)=>{
        this.setData({
          name:res.data.name,
          sex:res.data.sex,
          pai:res.data.pai,
        })
      }
    })
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
    console.log('detail-监听页面显示')
    wx.getStorage({
      key:'userInfo',
      success: (res) => {
        this.setData({
          name:res.data.name,
          sex:res.data.sex,
          pai:res.data.pai
        })
      }
    })
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