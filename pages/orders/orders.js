// pages/orders/orders.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    orderlist:[],
    // orderlist:[
    //   {
    //     id: 1,
    //     name:"普宁丽江骏景店",
    //     type:"配送中",
    //     state:"已完成",
    //     img:"/static/拿铁.png",
    //     coffeename:"厚乳拿铁",
    //     specification:"大/热/无糖",
    //     time:"2025-4-27 17:00:00",
    //     price:"￥18.8",
    //     total:"×1"
    //   },{
    //     id: 2,
    //     name:"普宁丽江骏景店",
    //     type:"自取/预约",
    //     state:"已完成",
    //     img:"/static/拿铁.png",
    //     coffeename:"厚乳拿铁",
    //     specification:"大/热/无糖",
    //     time:"2025-4-27 17:00:00",
    //     price:"￥18.8",
    //     total:"×1"
    //   }
    // ],
  },

  onLoad() {
    // 初始化加载全部订单
    this.filterOrders(0);
  },

   // 切换选项卡事件处理
   switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    if (this.data.currentTab === index) return;
    this.setData({ currentTab: index },()=> {
      console.log('currentTab已更新:',this.data.currentTab)
      this.filterOrders(index);
    }) 
  },
  // 订单筛选方法
  filterOrders(tabIndex) {
    var orderlist =[];
    //发起网路请求，查询所有订单
    wx.request({
      url: "http://localhost:10010/orders/listAll",
      method:"get",
      success:(res)=>{
        console.log(res);
        orderlist=res.data;
        let filtered = [];
      switch (tabIndex) {
      case 0: // 全部订单
        filtered = [...orderlist];
        break;
      case 1: // 自取/预约
        filtered = orderlist.filter(item => item.type === "自取/预约");
        break;
      case 2: // 配送订单
        filtered = orderlist.filter(item => item.type === "配送中");
        break;
    }
    console.log('当前选项卡:', tabIndex)
    console.log('原始订单数据:', this.data.orderlist)
    console.log('筛选结果:', filtered)
    this.setData({ filteredOrders: filtered });
  }

      });
  },

    // const { orderlist } = this.data;
    

  /**
   * 生命周期函数--监听页面加载
   */

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