import Board from "../src/models/board";
import Hand from "../src/models/hand";

describe('Board', () => {
    it('Board extends Hand', () => {
        let board = new Board({cards: [], limit: 5})
        expect(board instanceof Hand).toBe(true)
    })
})