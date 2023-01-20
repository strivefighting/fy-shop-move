const v = "_plusWrap_dvh9j_1", h = "_moveY_dvh9j_1", m = "_plusTarget_dvh9j_15", p = "_moveX_dvh9j_1", c = {
  plusWrap: v,
  moveY: h,
  plusTarget: m,
  moveX: p
};
class d {
  /**
   * 
   * @param {Object} options 参数
   * @param {HTMLElement} options.clickEle 点击事件触发元素
   * @param {HTMLElement} options.storeEle 动画目标元素
   * @param {String} options.moveHTML 动画元素html字符串
   * @param {String} options.moveEleSize 动画元素尺寸，宽高一致；单位：px
   * @param {Function} options.moveEndCallback 动画结束回调函数
   */
  constructor(e) {
    this.clickEle = e.clickEle, this.storeEle = e.storeEle, this.moveHTML = e.moveHTML, this.moveEleSize = e.moveEleSize, this.moveEndCallback = e.moveEndCallback || function() {
    }, this.init();
  }
  init() {
    this.checkOptions() && this.clickEle.addEventListener("click", () => {
      const e = document.createElement("div"), t = document.createElement("div");
      e.className = c.plusWrap, t.className = c.plusTarget, t.innerHTML = this.moveHTML, e.appendChild(t);
      const s = this.clickEle.getBoundingClientRect(), o = s.left + s.width / 2 - this.moveEleSize / 2, i = s.top - this.moveEleSize, l = this.storeEle.getBoundingClientRect(), n = l.left + l.width / 2 - this.moveEleSize / 2 - o, a = l.top - this.moveEleSize - i;
      e.style.setProperty("--left", `${o}px`), e.style.setProperty("--top", `${i}px`), e.style.setProperty("--x", `${n}px`), e.style.setProperty("--y", `${a}px`), e.addEventListener("animationend", () => {
        this.moveEndCallback(), e.remove();
      }), document.body.appendChild(e);
    });
  }
  checkOptions() {
    return [this.clickEle, this.storeEle, this.moveHTML, this.moveEleSize].some((e) => !e) ? (console.error("The parameters of Move class is illegal!"), !1) : !0;
  }
}
class E {
  static create(e) {
    return new d(e);
  }
}
export {
  E as default
};
