// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		msg: '北方汉子',
		userInfo: {},
		isShow: true
  },
	handleParent(){
		console.log('parent');
	},
	handleChild() {
		console.log('child');
	},


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		console.log('onLoad');
		// 修改data中的状态值
		this.setData({
			msg: 'wechart'
		})
		this.getInfo();

		
  },
	getInfo(){
		// 获取用户登录的信息
		wx.getUserInfo({
			success: (data) => {
				console.log(data);
				// 修改状态数据
				this.setData({
					userInfo: data.userInfo
				});
			},
			fail: () => {
				console.log('获取失败');
			}
		})
	},
	getUserInfo(data){
		console.log(data);
		// 判断用户点击的是否是允许
		if(data.detail.rawData){
			// 点击的是允许
			this.setData({
				isShow: false
			});
			this.getInfo();
		}
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