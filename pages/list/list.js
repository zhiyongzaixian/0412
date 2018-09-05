// pages/list/list.js
// 引入数据   只能用相对路劲去引入
let listData = require('../../datas/list-data.js');
console.log(listData, typeof listData);
Page({

  /**
   * 页面的初始数据
   */
  data: {
		listArr: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
		// 更新数据源
		this.setData({
			listArr: listData.list_data
		})
  },
	toDetail(event){
		let index = event.currentTarget.dataset.index;
		wx.navigateTo({
			url: '/pages/detail/detail?index=' + index
		})
	}
 
})