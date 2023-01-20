import styles from '../index.module.css';

export default class Move {
    /**
     * 
     * @param {Object} options 参数
     * @param {HTMLElement} options.clickEle 点击事件触发元素
     * @param {HTMLElement} options.storeEle 动画目标元素
     * @param {String} options.moveHTML 动画元素html字符串
     * @param {String} options.moveEleSize 动画元素尺寸，宽高一致；单位：px
     * @param {Function} options.moveEndCallback 动画结束回调函数
     */
    constructor(options) {
        this.clickEle = options.clickEle;
        this.storeEle = options.storeEle;
        this.moveHTML = options.moveHTML;
        this.moveEleSize = options.moveEleSize;
        this.moveEndCallback = options.moveEndCallback || function () {};
        this.init();
    }

    init() {
        if (!this.checkOptions()) {
            return;
        }
        this.clickEle.addEventListener('click', () => {
            const div = document.createElement('div');
            const plus = document.createElement('div');
            div.className = styles['plusWrap'];
            plus.className = styles['plusTarget'];

            plus.innerHTML = this.moveHTML;
            div.appendChild(plus)


            const clickRect = this.clickEle.getBoundingClientRect();
            const left = clickRect.left + clickRect.width / 2 - this.moveEleSize / 2,
                  top = clickRect.top - this.moveEleSize;

            const storeRect = this.storeEle.getBoundingClientRect();
            const x = storeRect.left + storeRect.width / 2 - this.moveEleSize / 2 - left,
                  y =  storeRect.top - this.moveEleSize - top;

            div.style.setProperty('--left', `${left}px`);
            div.style.setProperty('--top', `${top}px`);
            div.style.setProperty('--x', `${x}px`);
            div.style.setProperty('--y', `${y}px`);

            div.addEventListener('animationend', () => {
                this.moveEndCallback();
                div.remove();
            })

            document.body.appendChild(div);
        })
    }

    checkOptions() {
        if ([this.clickEle, this.storeEle, this.moveHTML, this.moveEleSize].some(ele => !ele)) {
            console.error('The parameters of Move class is illegal!');
            return false;
        }
        return true;
    }
}