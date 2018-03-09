const util = require("../../utils/util");
const {routes} = require("../../data/data");

Page({
    data: {
        img: util.data.img,
        routes,
        arrows: ["", "arrow-down"]
    },
    onLoad() {
        
    },
    edit(e) {
        const index = e.currentTarget.dataset.index;
        const routes = this.data.routes;
        let arrowIdx = routes[index].arrowIdx;
        if (arrowIdx == 0) {
            routes[index].arrowIdx = 1;
            //打开编辑
        } else {
            //收起编辑
            routes[index].arrowIdx = 0;
        }
        this.setData({
            routes
        })
    }
})
