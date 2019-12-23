/**
 * author: Xiawx
 * createTime: 2019/12/23
 * descript: 画笔功能
 */

const vm = {
    el: '#app',
    data() {
        return {
            // canvas列表
            canvasList: [`aa${Math.random()}`, `bb${Math.random()}`, `cc${Math.random()}`, `dd${Math.random()}`, `ee${Math.random()}`, `ff${Math.random()}`, `gg${Math.random()}`, `hh${Math.random()}`, `ii${Math.random()}`, `jj${Math.random()}`, `kk${Math.random()}`],
            // 画布父元素的dom
            canvasContainer: null
        }
    },
    methods: {
        /**
         * 通过选择器获取dom元素
         * @param {string} selector 选择器的名称
         * @return {array} 获取到的dom元素集合
         */
        getDom(selector) {
            return document.querySelectorAll(selector);
        },
        /**
         * 获取画布的父元素
         * @param {string} selector 父元素的选择器
         * @return {*} 获取到的父元素，如果没有获取到就返回null 
         */
        getCanvasWrap(selector) {
            const dom = this.getDom(selector);
            if (dom.length === 0) {
                return null;
            }
            return dom[0];
        },
        paintEvent() {},
    }
}