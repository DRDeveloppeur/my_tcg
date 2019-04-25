import Cemetary from "../src/models/cemetary";
import Deck from "../src/models/deck";

describe('Cemetary',() => {
    it('Cemetary extends Deck', () => {
        let cemetary = new Cemetary({cards: [], limit: 5})
        expect(cemetary instanceof Deck).toBe(true)
    })
})