import Player from "../src/models/player";
import Pawn from "../src/models/pawn";

describe('Player', () => {
    it('Player extends Pawn', () => {
        let player = new Player()
        expect(player instanceof Pawn).toBe(true)
    })
    describe('Methods exists', () => {
        it('shuffle exist', () => {
            let player = new Player()
            player.shuffle()
            expect(player.shuffle).not.toBe(undefined)
        })

        it('draw exist', () => {
            let player = new Player()
            expect(player.draw).not.toBe(undefined)
        })

        it('playCard exist', () => {
            let player = new Player()
            expect(player.playCard).not.toBe(undefined)
        })

        it('discard exist', () => {
            let player = new Player()
            expect(player.discard).not.toBe(undefined)
        })

        it('attack exist', () => {
            let player = new Player()
            expect(player.attack).not.toBe(undefined)
        })
    })

    describe('shuffle', () => {
        it("shuffle mix the deck", () => {
            let deckAlpha = new Player({deck: [1, 2, 3]})
            let mixAlpha = deckAlpha.shuffle()
            if (deckAlpha.deck[0] == 1 && 
                deckAlpha.deck[1] == 2 && 
                deckAlpha.deck[2] == 3) {
                expect(deckAlpha.deck).toEqual([1, 2, 3])
                expect(mixAlpha).toBe(false)
            } else {
                expect(deckAlpha.deck).not.toEqual([1, 2, 3])
                expect(mixAlpha).toBe(true)
            }
        })
    });
})