export class Button {
    constructor (node, callback) {
        this.node = node
        this.callback = callback
        this.bindEvent()
    }

    bindEvent () {
        this.node.addEventListener('click', this.callback)
    }
}