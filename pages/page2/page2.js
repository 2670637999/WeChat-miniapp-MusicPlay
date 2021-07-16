// pages/page2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    audio:[
      { id: 0, name:'华语流行' , pageUrl:'/pages/page2/page2?id=0', imageUrl:'/images/CA.png', fileUrl:'/images/CA.mp3' },
      { id: 1, name:'纯音乐/励志', pageUrl:'/pages/page2/page2?id=1', imageUrl:'/images/CB.png', fileUrl:'/images/CB.mp3' },
      { id: 2, name:'心灵驿站', pageUrl:'/pages/page2/page2?id=2', imageUrl:'/images/CC.png', fileUrl:'/images/CC.mp3' },
      { id: 3, name:'轻缓纯音', pageUrl:'/pages/page2/page2?id=3', imageUrl:'/images/CD.png', fileUrl:'/images/CD.mp3' },
      { id: 4, name:'lofi/治愈', pageUrl:'/pages/page2/page2?id=4', imageUrl:'/images/CE.png', fileUrl:'/images/CE.mp3'},
      { id: 5, name:'Viva La Vida', pageUrl:'/pages/page2/page2?id=5', imageUrl:'/images/CF.png', fileUrl:'/images/CF.mp3'}
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ id: options.id })
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