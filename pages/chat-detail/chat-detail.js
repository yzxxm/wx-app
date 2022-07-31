Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollTop: 0,
    msgArr: [],
    msg: null
  },
  // 信息标识
  id: 0,
  // 把聊天内容始终显示在最低端
  scrollToBottom: function () {
    // 获取页面中所有类名为item的标签（节点）
    var list = wx.createSelectorQuery().selectAll('.item')
    list.boundingClientRect((res) => {
      console.log(res)
      // 如果是类名,返回值是一个数组
      // 数组中的对象有 id,top,left,bottom,right,width,height,dataset等属性
      // top： 节点的上边界
      // bottom： 节点的下边界
      // left： 节点的左边界
      // right： 右边界
      // width： 节点宽度
      // height：节点高度
      // var bottom = res[res.length - 1].bottom
      // this.setData({
      //   scrollTop: bottom
      // })
      var top = 0
      res.forEach((item) => {
        top += item.height
      })
      this.setData({
        scrollTop: top
      })
    }).exec()
  },

  ipt: function (e) {
    console.log(e)
    var num = e.detail.keyCode
    // 13  点击回车按钮时的键盘码
    if(num == 13){
      var msg = e.detail.value
      if(msg){
        // 向服务器发送数据
        wx.sendSocketMessage({
          data: msg,
        })
        var arr = this.data.msgArr
        // 把我的消息存在msgArr中
        var obj = {
          content: msg,
          role: 'me',  // 定义人物角色
          id: this.id ++ // 定义信息标识
        }
        arr.push(obj)
        this.setData({
          msgArr: arr,
          msg: null
        })
        this.scrollToBottom()
      }else{
        wx.showToast({
          title: '内容不能为空',
          icon: 'none',
          duration: 2000
        })
      }
    }
  },

  send: function (e) {
    var msg = e.detail.value.msg
    if(msg){
      // 向服务器发送数据
      wx.sendSocketMessage({
        data: msg,
      })
      var arr = this.data.msgArr
      // 把我的消息存在msgArr中
      var obj = {
        content: msg,
        role: 'me',  // 定义人物角色
        id: this.id ++ // 定义信息标识
      }
      arr.push(obj)
      this.setData({
        msgArr: arr,
        msg: '',
      })
      wx.request({
        url: 'http://api.qingyunke.com/api.php?key=free&appid=0&msg=' + msg,
        success:(res) =>{
          var reg = {}
          reg.content = res.data.content
          reg.role = "sever"
          reg.id = this.id + 1
          var arr =this.data.msgArr
          arr.push(reg)
          this.setData({
            msgArr: arr,          
          })
        }
      })
    }
    this.scrollToBottom()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.connectSocket({
      // 连接本地服务器地址
      // 3000是端口号，再服务器socket.js中httpServer.listen(3000, () => {})设置
      // 请求前开启不校验合法域名
      url: 'ws://127.0.0.1:3000',
    })
    // 连接成功
    wx.onSocketOpen((result) => {
      console.log('连接成功')
      // 向服务器发送数据
      // wx.sendSocketMessage({
      //   data: 'hello world',
      // })
    })
    // 监听服务器向客户端发送的消息
    wx.onSocketMessage((result) => {
      // 接受到数据后，把JSON字符串形式的内容转成对应JS格式
      var res = JSON.parse(result.data)
      console.log(res)
      res.role = 'sever' // 定义角色
      res.id = this.id + 1 // 定义信息标识
      var arr = this.data.msgArr
      arr.push(res)
      this.setData({
        msgArr: arr,
        msg: null  // 发送数据后清空输入框内容
      })
      this.scrollToBottom()
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