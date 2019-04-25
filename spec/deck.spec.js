import Deck from '../src/models/deck';

describe("Deck", () => {
    describe('Methods exists', () => {
        it("shuffle exist", () => {
            let deck = new Deck({cards: []})
            expect(deck.shuffle).not.toBe(undefined)
        })
    
        it("draw exist", () => {
            let deck = new Deck({cards: []})
            expect(deck.draw).not.toBe(undefined)
        })
    
        it("insertAt exist", () => {
            let deck = new Deck({cards: []})
            expect(deck.insertAt).not.toBe(undefined)
        })
    
        it("getCardsCount exist", () => {
            let deck = new Deck({cards: []})
            expect(deck.getCardsCount).not.toBe(undefined)
        })
    })

    it("draw return first card or false", () => {
        let deck = new Deck({cards: []})
        expect(deck.draw()).toBe(false)
        let deckAlpha = new Deck({cards: [1, 2, 3]})
        expect(deckAlpha.draw()).toBe(1)
        let deckBravo = new Deck({cards: [5, 6, 96]})
        expect(deckBravo.draw()).toBe(5)
    })

    it("shuffle mix the cards", () => {
        let deckAlpha = new Deck({cards: [1, 2, 3]})
        let mixAlpha = deckAlpha.shuffle()
        if (deckAlpha.cards[0] == 1 && 
            deckAlpha.cards[1] == 2 && 
            deckAlpha.cards[2] == 3) {
            expect(deckAlpha.cards).toEqual([1, 2, 3])
            expect(mixAlpha).toBe(false)
        } else {
            expect(deckAlpha.cards).not.toEqual([1, 2, 3])
            expect(mixAlpha).toBe(true)
        }
    })

    it("insertAt add card", () => {
        let deck = new Deck({cards: [1, 2, 3, 4]})
        deck.insertAt(100, 1)
        expect(deck.cards[0]).toEqual(1)
        expect(deck.cards[1]).toEqual(100)
        expect(deck.cards[2]).toEqual(2)
        expect(deck.cards[3]).toEqual(3)
        expect(deck.cards[4]).toEqual(4)
        expect(deck.cards.length).toEqual(5)
        deck.insertAt(20, 3)
        expect(deck.cards[3]).toEqual(20)
        expect(deck.cards.length).toEqual(6)
    })

    it("insertAt add card without position", () => {
        let deck = new Deck({cards: [1, 2, 3, 4]})
        deck.insertAt(50)
        expect(deck.cards[4]).toEqual(50)
        expect(deck.cards.length).toEqual(5)
    })

    it("getCardsCount count cards", () => {
        let deck = new Deck({cards: [1, 2, 3, 4]})
        expect(deck.getCardsCount()).toEqual(4)
        let deckAlpha = new Deck({cards: []})
        expect(deckAlpha.getCardsCount()).toEqual(0)
    })
})