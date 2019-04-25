import ModelFactory from './factory';
import Pawn from './pawn';

export default class Player extends Pawn {

    constructor(config) {
        super()
        console.log(config);

        // this.type = config.type;
        
        

        this.deck = ModelFactory.get('deck');
        this.board = ModelFactory.get('board');
        this.hand = ModelFactory.get('hand');
        this.cemetary = ModelFactory.get('cemetary');
        
        if (!config.deck) {
            config.deck = this.deck || []            
        }
    }

    shuffle (deck = "deck") {
        console.log(config.deck);
        console.log(deck);
    }

    draw () {
        return this.deck.draw();
    }

    playCard () {}

    discard () {}

    attack () {}
}

module.exports = Player