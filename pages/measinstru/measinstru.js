// pages/measinstru/measinstru.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    remark:''
  },
  continue:function(){
    wx.navigateTo({
      url: '../choose/choose',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'remark',
      success: function(res) {
        console.log(res)
         var remark = res.data;
        // function removeTAG(str, len) {
        //   return str.replace(/<[^>]+>/g, "");
        // }
        // var newremark = removeTAG(remark)
        that.setData({
          remark: remark
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

})