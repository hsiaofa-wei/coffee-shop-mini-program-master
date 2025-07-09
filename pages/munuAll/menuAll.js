// pages/munuAll/menuAll.js
import Dialog from '@vant/weapp/dialog/dialog';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dialogShow: {},
    addressName:"丽江骏景店",
    activeTab: 0, // 0表示自提/预约，1表示送货上门
    activeKey: 0, // 表示菜单选项编号
    allPrice:0,//总金额
    bodyItems: [],
    // bodyItems: [
    //     { id: 0, title: '人气Top', menuItem: [{
    //         imageURL:"/static/拿铁.png",
    //         title:"人气Top",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-1"
    //         },{
    //         imageURL:"/static/拿铁.png",
    //         title:"经典美式",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         }] 
    //     },
    //     { id: 1, title: '拿铁', menuItem: [{
    //         imageURL:"/static/拿铁.png",
    //         title:"拿铁1",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         },{
    //         imageURL:"/static/拿铁.png",
    //         title:"拿铁2",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         }] 
    //     },
    //     { id: 2, title: '大师级', menuItem:[{
    //         imageURL:"/static/拿铁.png",
    //         title:"大师级1",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         },{
    //         imageURL:"/static/拿铁.png",
    //         title:"大师级2",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         }]
    //     },
    //     { id: 3, title: '经典咖啡', menuItem:[{
    //         imageURL:"/static/拿铁.png",
    //         title:"经典咖啡1",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //         },{
    //         imageURL:"/static/拿铁.png",
    //         title:"经典咖啡2",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //      },{
    //         imageURL:"/static/拿铁.png",
    //         title:"经典咖啡3",
    //         detail:"大/热/无糖",
    //         price:"￥18.8",
    //         dialogId: "dialog-2"
    //     }] 
    //     }
    //   ],
      wenduList: [
        { id: 1, text: "常温" },
        { id: 2, text: "冰" },
        { id: 3, text: "热" }
      ],
      guigeList:[
        { id: 4, text: "大杯" },
        { id: 5, text: "中杯" },
        { id: 6, text: "小杯" }
      ],
      activewenduId: null,
      activeguigeId: null,
      bodyTopImage:"/static/菜单头部图片.png"
    },
   
  handleSelectwendu(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      activeId1: id // 更新选中的ID
    });
  },
  handleSelectguige(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({
      activeId: id // 更新选中的ID
    });
  },
  onShowAlert(e) {
    const dialogId = e.currentTarget.dataset.dialogId;
    // 使用组件的 setData 方法来显示对话框
    this.setData({
      [`dialogShow.${dialogId}`]: true
    });
  },
  onConfirm(e) {
    const dialogId = e.currentTarget.dataset.dialogId;
    this.setData({
      [`dialogShow.${dialogId}`]: false
    }); 
    wx.showToast({ title: '已加入购物袋' });
   
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
    if (this.data.scrolling) return;
    console.log(event);
      console.log(event.detail);
    
    this.setData({
      activeKey: event.detail,
      scrolling: true
    });
    // 300ms后重置scrolling状态（根据滚动动画时间调整）
    setTimeout(() => {
        this.setData({ scrolling: false });
      }, 300);
    
  },
  // 滚动事件处理
  onScroll(event) {
    if (this.data.scrolling) return;
    
    const scrollTop = event.detail.scrollTop;
    const query = wx.createSelectorQuery();
    
    query.selectAll('.content-section').boundingClientRect(rects => {
      rects.forEach((rect, index) => {
        // 判断哪个section进入了可视区域
        if (scrollTop >= rect.top && scrollTop < rect.bottom) {
          this.setData({ activeKey: index });
        }
      });
    }).exec();
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
       wx.request({
         url: 'http://localhost:10010/category/listAll',
         date: {},
        method:"get",
        success:(res)=>{
          console.log(res);
          this.setData({
            bodyItems:res.data
          });
        }
        
       });
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