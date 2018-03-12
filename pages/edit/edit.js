const util = require("../../utils/util");
const {routes} = require("../../data/data");

Page({
    data: {
        img: util.data.img,
        routes,
        arrows: ["", "arrow-down"],
        inputHint: ["路线指引20字以内", "路线指引（长按可删除输入框）"],
        hintIdx: 0
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
    },
    addInput(e) {
        const dataset = e.currentTarget.dataset;
        const routes = this.data.routes;
        let hintIdx = this.data.hintIdx;
        routes[dataset.index].routeArray[dataset.idx].descArray.push({});
        if (routes[dataset.index].routeArray[dataset.idx].descArray .length> 3) {
            hintIdx = 1;
        }
        this.setData({routes, hintIdx});
    },
    descInput(e) {


    },
    deleteDesc(e) {
        const dataset = e.currentTarget.dataset;
        let routes = this.data.routes;
        let hintIdx = this.data.hintIdx;
        let descArray = routes[dataset.index].routeArray[dataset.idx].descArray;
        if (descArray.length <= 3) {
            util.alert("输入框少于四个，无法删除");
            return;
        }
        util.modal("确定删除这个输入框？", () => {
            descArray.splice(dataset.i, 1);
            if (routes[dataset.index].routeArray[dataset.idx].descArray.length <= 3) {
                hintIdx = 0;
            }
            this.setData({routes, hintIdx})
        })
    }
})
