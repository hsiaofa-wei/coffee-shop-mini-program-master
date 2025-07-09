// pages/YouHui/youhui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      status: '未使用',
      coupons: [
        {
          id: 1,
          amount: 10,
          threshold: '无金额门槛',
          validDate: '2020.04.11至2020.05.11',
          typeLabel: '现金券',
          typeName: '奶茶无门槛20元券',
          status: '已使用'
        },
        {
          id: 2,
          amount: 10,
          threshold: '满¥599使用',
          validDate: '2020.04.11到期',
          typeLabel: '满减券',
          typeName: '无门槛10元券',
          status: '已使用'
        }
      ],
      filteredCoupons: []
    },
    changeStatus: function (e) {
      const newStatus = e.currentTarget.dataset.status;
      this.setData({
        status: newStatus
      });
      this.filterCoupons();
    },
    filterCoupons: function () {
      const { status, coupons } = this.data;
      const filtered = coupons.filter(coupon => coupon.status === status);
      this.setData({
        filteredCoupons: filtered
      });
    },
    onLoad(options) {
      this.setData({
        status: '未使用'
      });
      this.filterCoupons();
    },

    
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})