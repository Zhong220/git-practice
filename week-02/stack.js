// stack.js

export default class Stack {
    #items;

    /* TODO: # 有特別的意思嗎？
    
    Ans: 是JS在沒有private這種宣告方式時，
    衍生出使用 # 來做到"私有"這件事，只有這個
    class的內部方法可以存取或修改它，外部無法直接存取 */

    constructor() {
        this.#items = []; // 使用array儲存stack的元素
    }

    // 在 stack 頂部加入元素i
    push(element) {
        this.#items[this.#items.length] = element;
    }

    // 移除並回傳 stack 頂部的元素
    pop() {
        if (this.isEmpty()) { console.log("stack is empty"); }
        else {
            let last_element = this.peek();
            this.#items.length -= 1;
            return last_element;
        }
    }

    // 回傳 stack 頂部的元素，但不移除它
    peek() {
        if (this.isEmpty()) { console.log("stack is empty"); }
        else { return this.#items.length - 1; }
    }

    // 檢查 stack 是否為空
    isEmpty() {
        return this.#items.length === 0;
    }

    // 回傳 stack 中元素的個數
    size() {
        return this.#items.length;
    }

    // 清空 stack 
    clear() {
        this.#items.length = 0;
    }

    // 印出 stack 內容
    print() {
        if (this.size() == 0) { console.log("stack is empty"); }
        else { console.log(this.#items.toString()); }

        this.print_size();
    }

    print_size() {
        console.log(this.#items.length);
    }
}