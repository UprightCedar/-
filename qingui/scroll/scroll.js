module.exports = {
	jumpScroll(e) {
		const dataset = e.currentTarget.dataset;
		const path = dataset.path ? dataset.path : "";
		if (path) {
			wx.navigateTo({
				url: path
			});
		}
	}
};

