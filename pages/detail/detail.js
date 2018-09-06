// pages/detail/detail.js
let listData = require('../../datas/list-data.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
		detailObj: {},
		index: null,
		isCollected: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log(options);
		let index = options.index;
		// 更新数据
		this.setData({
			detailObj: listData.list_data[index],
			index
		});

		// 获取本地缓存的数据
		wx.getStorage({
			key: 'isCollected',
			success: (msg) => {
				console.log(msg);
				this.setData({
					isCollected: msg.data[index]
				})
			}
		})
  },
	handleCollection(){
		let isCollected = !this.data.isCollected;
		// React中修改状态是异步的，可以在第二个回调中获取修改完的状态
		// this.setState({
		// 	msg: 123
		// })
		// console.log(this.state.msg);
		this.setData({
			isCollected
		}, () => {
			console.log('修改状态成功');
			
		});

		let title = isCollected ? '收藏成功' : '取消收藏';
		// 设置提示功能
		wx.showToast({
			icon: 'success',
			title
		})
		// 将数据缓存到本地
		// 准备缓存的数据
		// let obj = {0: true, 1: false, 2: true};
		let index = this.data.index;
		let obj = wx.getStorageSync('isCollected');
		console.log(obj, 'xxxxxxxx');
		// 预处理工作，防止用户第一次点击收藏按钮，此时obj为空，
		!obj && (obj = {});
		obj[index] = isCollected;
		wx.setStorageSync('isCollected', obj);

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