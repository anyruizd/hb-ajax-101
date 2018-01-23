import InfoCards from './InfoCards.js'

export default class CardsController {
    constructor (node) {
        this.node = node
    }
    build (data) {
        const arr = data.map((item) => {
            return InfoCards.getString(item)
        }).join('')
        this.node.innerHTML = arr
    }
}   