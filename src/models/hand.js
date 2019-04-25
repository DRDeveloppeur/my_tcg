export default class Hand {
    
    constructor (config) {
        this.limit = config.limit;
        this.cards = config.cards
        if (!config.limit) {
            this.limit = 7    
        }
    }

    addCard (card) {
        if (this.limit > this.cards.length && card) {
            this.cards[this.cards.length] = card
            return true
        }
        return false
    }

    removeCard (position) {
        if (this.cards.length > 0 && this.cards[position]) {
            return this.cards.splice(position, 1)
        }
        return false
    }

    getAllCards () {
        return this.cards
    }

    getCardsCount () {
        return this.cards.length
    }
}

module.exports = Hand