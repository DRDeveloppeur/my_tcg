import ModelFactory from './factory';
import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config={deck: []}) {
        super()

        // Pour palier au problemme de jQuery
        this.deck = config.deck

        // this.type = config.type;

        // this.deck = ModelFactory.get('deck');
        // this.board = ModelFactory.get('board');
        // this.hand = ModelFactory.get('hand');
        // this.cemetary = ModelFactory.get('cemetary');
        
        // if (!config.deck) {
        //     config.deck = this.deck || []
        // }
    }

    shuffle (deck = "deck") {
        let test = 0
        if (this.deck && this.deck.length != 0) {
            for(var position=this.deck.length-1; position>=1; position--){
                var hasard=Math.floor(Math.random()*(position+1));
                var sauve=this.deck[position];
                this.deck[position]=this.deck[hasard];
                this.deck[hasard]=sauve;
                if (this.deck[position] == this.deck[hasard]) {
                    test++
                }
            }
            if (test == this.deck.length-1) {
                return false
            }
            return true
        }
        return false
    }

    draw () {
        if (this.deck && this.deck.length !== 0) {
            return this.deck.shift()
        }

        return false
    }

    playCard () {}

    discard () {}

    attack () {}
}

module.exports = Player