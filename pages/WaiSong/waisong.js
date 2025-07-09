// pages/munuAll/menuAll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      {
        id: 1,
        address: '普宁市流沙北街道新河东路丽江骏景50号商铺',
        name: '测试',
        phone: '13512345678',
        isDefault: true
      },
      {
        id: 2,
        address: '普宁市流沙北街道新河东路丽江骏景50号商铺',
        name: '测试',
        phone: '13412345678',
        isDefault: false
      }
    ]
  },
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
    // 这里可以添加切换后的业务逻辑
    if (index == 0) {
      console.log('选择了自提/预约');
    } else {
      console.log('选择了送货上门');
    }
  },
  changeMenu(event) {
    console.log(event);
      console.log(event.detail);
    const index = event.detail;
    
    this.setData({
      activeKey: index
    });
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