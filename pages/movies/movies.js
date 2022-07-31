// pages/movies/movies.js
 
Page({
 
  // RESTFUL API  json
  // SOAP XML 用的相当少
 
  /**
   * 页面的初始数据
   */
  data: {
    flag:false,
    bili: {
      "data": [
        {
          "aid": "641429906",
          "title": "【4月】测不准的阿波连同学 08【独家正版】",
          "subtitle": "",
          "play": 1067624,
          "review": 1481,
          "video_review": 16165,
          "author": "哔哩哔哩番剧",
          "pic": "http://i1.hdslb.com/bfs/archive/19d45cbf473b57918509055d3cffe21ea8cadf8a.jpg"
        }, {
          "aid": "854242442",
          "title": "【4月】恋爱游戏世界对路人角色很不友好 08【独家正版】",
          "subtitle": "",
          "play": 497983,
          "review": 1850,
          "video_review": 6902,
          "author": "哔哩哔哩番剧",
          "description": "#08",
          "create": "2022-05-22 21:00",
          "pic": "http://i2.hdslb.com/bfs/archive/7d1fec8546de42648c564a27df074ff52162c240.png",
        }, {
          "aid": "811629696",
          "typename": "连载动画",
          "title": "疯狂动物城【迪士尼影业出品的3D动画片】",
          "subtitle": "",
          "play": 334835,
          "review": 971,
          "video_review": 5023,
          "author": "哔哩哔哩番剧",
          "description": "#07",
          "create": "2022-05-20 22:00",
          "pic": "https:\/\/img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2614500649.jpg",
          "coins": 2769,
        }, {
          "aid": "641429906",
          "title": "龙猫【由宫崎骏执导，日高法子、坂本千夏、糸井重里配音的动画电影】",
          "subtitle": "",
          "play": 1067624,
          "review": 1481,
          "video_review": 16165,
          "author": "哔哩哔哩番剧",
          "pic": "https:\/\/img9.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2540924496.jpg"
        }, {
          "aid": "854242442",
          "title": "数码宝贝",
          "subtitle": "",
          "play": 497983,
          "review": 1850,
          "video_review": 6902,
          "author": "哔哩哔哩番剧",
          "description": "#08",
          "create": "2022-05-22 21:00",
          "pic": "https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2623955494.jpg",
        }, {
          "aid": "811629696",
          "typename": "连载动画",
          "title": "千与千寻",
          "subtitle": "",
          "play": 3434835,
          "review": 971,
          "video_review": 15023,
          "author": "哔哩哔哩番剧",
          "description": "",
          "create": "2022-05-20 22:00",
          "pic": "https:\/\/img1.doubanio.com\/view\/photo\/s_ratio_poster\/public\/p2557573348.jpg",
          "coins": 2769,
        }
      ]
    }
 
  },
 

  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
    // getList(this);
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
    // getList(this);
  },
  inputTyping: function (e) {
    //搜索数据
    // getList(this, e.detail.value);
    this.setData({
      inputVal: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */

  onLoad: function() {
 
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