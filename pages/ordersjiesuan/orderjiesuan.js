// pages/ordersjiesuan/orderjiesuan.js
import Dialog from '@vant/weapp/dialog/dialog';
const options = [
  {
    text: '12点',
    value: '330000',
  },
  {
    text: '13点',
    value: '320000',
  },
];
Page({
  switchTab(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      activeTab: index
    });
  },
  
  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    radio1: '1',
    showDialog: false,
    showDialog1: false,
    showDialog2:false,
    inputValue: '' ,
    value: '',  
    show: false,
    options,
    fieldValue: '',
    cascaderValue: '',
    currentTime: '12:00',
  },
  // 打开弹窗
  beizhu() {
    this.setData({ showDialog: true });
  },
  // 监听输入
  onInput(e) {
    this.setData({ inputValue: e.detail.value });
  },
  // 关闭弹窗
  onClose() {
    this.setData({ showDialog: false });
  },
  onClose1() {
    this.setData({ showDialog2: false });
    console.log("---")
  },
  onclick2(){
    this.setData({ showDialog1: true });
  },
  
  onChange(event) {
    this.setData({
      radio: event.detail,
    });
  },
qvzhifu(){
  this.setData({ showDialog2: true });
},

  onChange1(event) {
    // event.detail 为当前输入的值
    // console.log(event.detail);
  },
  //确认支付方式
  onChange2(event) {
    this.setData({
      radio: event.detail,
    });
  },

  onClick2(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name,
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