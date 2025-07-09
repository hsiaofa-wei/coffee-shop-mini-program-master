// pages/munuAll/menuAll.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    storeList: [
      {
        name: '普宁丽江骏景店',
        address: ['广东省普宁市流沙北街道新河东路', '丽江骏景50号商铺'],
        businessHours: '10:00 - 22:00',
        distance: '510.2m',
        isSelected: true
      },
      {
        name: '普宁万泰汇店',
        address: ['广东省普宁市流沙北街道新河东路', '丽江骏景50号商铺'],
        businessHours: '10:00 - 22:00',
        distance: '510.2m',
        isSelected: false
      }
    ]
  },
  handleStoreSelect: function(e) {
    const index = e.currentTarget.dataset.index;
    const storeList = this.data.storeList;
    storeList.forEach((store, i) => {
      store.isSelected = i === index;
    });
    this.setData({
      storeList: storeList
    });
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