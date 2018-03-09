const util = require("../../utils/util");
Page({
    data: {
        img: util.data.img
    },
    onLoad() {
        wx.navigateTo({
            url: "../edit/edit"
        })
    },
    goFaq() {
        wx.navigateTo({
            url: "../faq/faq"
        })
    },
    goNext() {
        const isIntroViewed = wx.getStorageSync("isIntroViewed");
        let url = "../edit/edit";
        if (!isIntroViewed) {
            url = "../intro/intro";
        }
        wx.navigateTo({url});
    }
})
