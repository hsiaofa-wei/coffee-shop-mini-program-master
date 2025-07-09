// pages/Member/member.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,
    memberlist:[
      {
        id: 1,
        name:"白银会员",
        progress:"0/1000",
        detail:"再升一级可享受黄金权益",
      },{
        id: 1,
        name:"黄金会员",
        progress:"0/10000",
        detail:"再升一级可享受铂金权益",
      },{
        id: 1,
        name:"铂金会员",
        progress:"0/100000",
        detail:"已享受最高权益",
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.filterMembers(0);
  },
  // 切换选项卡事件处理
  switchTab(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    if (this.data.currentTab === index) return;
    this.setData({ currentTab: index },()=> {
      console.log('currentTab已更新:',this.data.currentTab)
      this.filterMembers(index);
    }) 
  },
  // 订单筛选方法
  filterMembers(tabIndex) {
    const { memberlist } = this.data;
    let filtered = [];
    switch (tabIndex) {
      case 0:
        filtered = memberlist.filter(item => item.name === "白银会员");
        break;
      case 1:
        filtered = memberlist.filter(item => item.name === "黄金会员");
        break;
      case 2:
        filtered = memberlist.filter(item => item.name === "铂金会员");
        break;
    }
    console.log('当前选项卡:', tabIndex)
    console.log('原始订单数据:', this.data.memberlist)
    console.log('筛选结果:', filtered)
    this.setData({ filteredMembers: filtered });
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