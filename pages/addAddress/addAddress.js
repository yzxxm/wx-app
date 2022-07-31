// pages/addAddress/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    area:[],
    list:[],
    labelList: ["家", "公司", "学校"],            //标签
    labelDefault: 0,              // 标签默认,

  },

  submitForm:function(e){
    console.log(e)
    var value = e.detail.value
    //电话号码的校验，所有数值不为空
    var reg=/^((13)|(14)|(15)|(17)|(18)|(19))\d{9}/  //电话号码正则表达式
    if(reg.test(value.tel) && value.name && value.email && value.area && value.address){
      //把数据添加到本地缓存中，并返回上一个页面
      var list = this.data.list
      //新增地址是默认选中的
      for(var i = 0; i < list.length ; i++){
        list[i].states = 0
      }
      value.states = 1
      value.delFlag = false
      list.push(value)
      wx.setStorage({
        key:'myAddress',
        data:list,
        success:() => {
          wx.navigateBack({
            delta:1,
          })
        }
      })
    }else{
      //提示填写内容有误
      wx.showToast({
        title: '请检查填写内容',
        icon:'none',
        duration:2000
      })
    }
  },

  picker: function (e) {
    console.log(e.detail.value)
    this.setData({
      area: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:"myAddress",
      success:(res) =>{
        this.setData({
          list:res.data
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