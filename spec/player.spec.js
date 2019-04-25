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
    })
})