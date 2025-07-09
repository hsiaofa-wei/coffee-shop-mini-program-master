// pages/JieSuan/jiasuan.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressLine1: '流沙东街道新河东路工业东村丽江骏景50号',
    addressLine2: '元组科技',
    totalPrice: 21.8,
    product: {
      name: '厚乳拿铁',
      quantity: 1,
      price: 18.8,
      spec: '大/热/无糖',
      image: '/path/to/product - image.png' // 替换为实际图片路径
    },
    totalProductCount: 2,
    deliveryFee: 3
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