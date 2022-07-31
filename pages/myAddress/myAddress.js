// pages/myAddress/myAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    delFlag:false,
    clientX1:''
  },


  changeAddress:function(e){
    var num = e.currentTarget.dataset.count
    wx.navigateTo({
      //路径传参:           在正常路径后添加query数据
      //                   格式：?key=data1&key1=data2
      //比如：              /pages/index?id=66&count=2&name=aa
      //传递之后，在跳转后的页面onLoad生命周期函数里可以通过options获取传递的参数
      url: '/pages/changeAddress/changeAddress?index=' + num,
    })
  },


  addAddress:function(){
    wx.navigateTo({
      url: '/pages/addAddress/addAddress',
    })
  },

  
  delAddress:function(e){
    var num = e.currentTarget.dataset.count
    var list = this.data.list
    list.splice(num,1)
    this.setData({
      list:list
    })
    wx.setStorage({
      data: list,
      key: 'myAddress',
    })
  },

  start:function(e){
    console.log(e)
    //手指滑动开始时，指尖相对于在屏幕左侧
    var clientX1 = e.touches[0].clientX
    this.setData({
      clientX1:clientX1
    })
  },

  move:function(e){
    console.log(e)
    //指尖相对于屏幕左侧的位置
    var clientX2 = e.touches[0].clientX
    //指尖相对于屏幕左侧的位置
    var clientX1 = this.data.clientX1
    var num = e.currentTarget.dataset.count
    var list = this.data.list

    //如果手指开始X位置大于滑动过程中手指位置+50，说明滑动距离足够，把删除按钮显示出来
    if(clientX1 >= clientX2 + 50){
        for(var i = 0; i<list.length ; i++){
          if(i == num){
            list[i].delFlag = true
          }else{
            list[i].delFlag = false
          }
        }
    }
    if(clientX1 <=clientX2 - 50){
      for(var i=0;i<list.length;i++){
        list[i].delFlag =false
      }
    }
    //数据更新，内容也会更新
    this.setData({
      list:list
    })
    wx.setStorage({
      data: list,
      key: 'myAddress',
    })
  },


  click:function(e){
    var list =this.data.list
    //获取当前地址栏的下标
    var num =e.currentTarget.dataset.count
    for(var i = 0 ; i < list.length ; i++){
      if( i == num ){
        list[i].states = 1
      }else{
        list[i].states = 0
      }
    }
    this.setData({
      list:list
    })
    //把改好的数据重新设置到本地缓存中
    wx.setStorage({
      data: list,
      key: 'myAddress',
      success:()=>{
        wx.navigateBack({
          delta: 1,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key:'myAddress',
      success:(res)=>{
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
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    var list = this.data.list
    for(var i =0; i< list.length; i++){
      list[i].delFlag = false
    }
    wx.setStorage({
      data: list,
      key: 'myAddress',
    })
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