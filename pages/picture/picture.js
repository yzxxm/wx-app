// pages/picture/picture.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    post_img: '/images/04.png',
    author_img: '/images/mypic.jpg',
  },

  imgPath:"/images/..",


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var posts_content = [
      {
        date: "Sep 18 2022",
        title: '失去的总是会回来的，只是不以我们期待的方式',
        content: '还记得心里藏着多少美丽陪回忆一起去流浪，南部小城，光阴缓慢的城，你说你今天就要回到你的家乡。你要记住，所有爱我们的人都会在我们身边，他们会永远陪着你，在你的心中。',
        view_num: '112',
        collect_num: '64',
        // 嵌套
        img: {
          post_img: '/images/huiyi.jpg',
          author_img: '/images/mypic.jpg',
        },
        img_condition: true,
        postId: 0,
      },
      {
        date: "Nav 16 2021",
        title: '初心易得，始终难守',
        content: '每个人心中都有阳光和阴暗的一面，重要的是我们选择成为什么，那才是真正的我们。决定我们成为什么样的人，不是我们的能力，而是我们的选择。',
        view_num: '256',
        collect_num: '151',
        // 嵌套
        img: {
          post_img: '/images/xiaoyang.jpg',
          author_img: '/images/tx.jpg',
        },
        img_condition: true,
        postId:1,
      },
      {
        date: "May 20 2022",
        title: '哪朵玫瑰没有荆棘',
        content: '并不是所有女孩都是用糖果和香料造成的，有些女孩，生来就代表智慧，勇敢和无所畏惧.',
        view_num: '656',
        collect_num: '112',
        // 嵌套
        img: {
          post_img: '/images/bbb.jpg',
          author_img: '/images/aaa.jpg',
        },
        img_condition: true,
        postId:2,
      }
    ]

    this.setData(
      { posts_key: posts_content}
    );
  },

  onPostTap:function(){
    wx.navigateTo({
      url: '../picture-detail/picture-detail',
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