export default class Deck {
    constructor (config={cards: []}) {
        this.cards = config.cards
    }
    
    shuffle () {
        let test = 0
        if (this.cards && this.cards.length != 0) {
            for(var position=this.cards.length-1; position>=1; position--){
                var hasard=Math.floor(Math.random()*(position+1));
                var sauve=this.cards[position];
                this.cards[position]=this.cards[hasard];
                this.cards[hasard]=sauve;
                if (this.cards[position] == this.cards[hasard]) {
                    test++
                }
            }
            if (test == this.cards.length-1) {
                return false
            }
            return true
        }
        return false
    }
    
    draw () {
        if (this.cards && this.cards.length !== 0) {
            return this.cards.shift()
        }

        return false
    }

    
    insertAt (card, position) {
        if (this.cards && position) {
            this.cards.splice(position, 0, card)
        }
        if (!position && card && this.cards) {
            this.cards.push(card)
        }
    }
    
    getCardsCount () {
        if (this.cards) {
            return this.cards.length
        }
        return 0
    }
}

module.exports = Deck