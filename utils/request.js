const util = require('./util');
// 获取用户openid
function GetSessionKey(dataObj) {
	return util.get('/KorjoApi/GetSessionKey', dataObj)
}

//上传图片
function upload(filePath) {
	// util.loading();
	return new Promise((resolve, reject) => {
		wx.uploadFile({
			url: `${util.data.host}/KorjoApi/AdminUpload`,
			name: 'file',
			formData: { "path": "golf", "type": "image" },
			filePath,
			success: (res) => {
				util.hideLoading();
				resolve(res.data);
			},
			fail: (error) => {
				reject(error);
			}
		})
	});
}


//粉我吧科技介绍页
function GetFansIntro(wxpublic_id) {
	return util.get('/KorjoApi/GetFansIntro', {wxpublic_id});
}

module.exports = {
    GetSessionKey,
	upload,
	GetFansIntro
}
