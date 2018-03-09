const util = require("../../utils/util");
Page({
    data: {
        img: util.data.img,
        isShowDots: true,
        current: 0
    },
    onLoad() {
        wx.setStorageSync("isIntroViewed", true);
    },
    changeSwiper(e) {
        const current = e.detail.current;
        let isShowDots = true;
        if (current == 3) {
            isShowDots = false;
        }
        this.setData({isShowDots, current});
    },
    goNext() {
        wx.navigateTo({
            url: "../edit/edit"
        })
    }
})
