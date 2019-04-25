import Hand from '../src/models/hand';

describe('Hand', () => {
    describe('Methods exists', () => {
        it('addCard exist', () => {
            let hand = new Hand({cards: []})
            expect(hand.addCard).not.toBe(undefined)
        })
        
        it('removeCard exist', () => {
            let hand = new Hand({cards: []})
            expect(hand.removeCard).not.toBe(undefined)
        })
        
        it('getAllCards exist', () => {
            let hand = new Hand({cards: []})
            expect(hand.getAllCards).not.toBe(undefined)
        })
        
        it('getCardsCount exist', () => {
            let hand = new Hand({cards: []})
            expect(hand.getCardsCount).not.toBe(undefined)
        })
    })

    describe('addCard', () => {
        it('addCard return false', () => {
            let hand = new Hand({cards: [1, 2, 3], limit: 3})
            expect(hand.addCard(5)).toBe(false)
            let handBravo = new Hand({cards: [1, 2, 3]})
            expect(handBravo.addCard()).toBe(false)
        })
        
        it('addCard return true and add the card', () => {
            let handAlpha = new Hand({cards: []})
            expect(handAlpha.addCard(5)).toBe(true)
            expect(handAlpha.addCard(7)).toBe(true)
            expect(handAlpha.cards[0]).toEqual(5)
            expect(handAlpha.cards[1]).toEqual(7)
            let handBravo = new Hand({cards: [1, 2, 3]})
            expect(handBravo.addCard(5)).toBe(true)
            expect(handBravo.cards[handBravo.cards.length-1]).toEqual(5)
        })
    })

    describe('removeCard', () => {
        it('position is not int', ()=> {
            let hand = new Hand({cards: [1, 2, 3]})
            expect(hand.removeCard('toto')).toBe(false)
            expect(hand.cards.length).toEqual(3)
        })

        it('position dosen\'t exist', () => {
            let hand = new Hand({cards: [1, 2, 3]})
            expect(hand.removeCard(5)).toBe(false)
            expect(hand.cards.length).toEqual(3)
        })

        it('remove card and return the card', () => {
            let hand = new Hand({cards: [1, 2, 3]})
            expect(hand.removeCard(1)).toEqual([2])
            expect(hand.cards.length).toEqual(2)
            expect(hand.cards[0]).toBe(1)
            expect(hand.cards[1]).toBe(3)
        })
    })

    describe('getAllCards', () => {
        it('return cards', () => {
            let hand = new Hand({cards: [1, 2, 3]})
            expect(hand.getAllCards()).toEqual([1, 2, 3])
        })

        it('void cards', () => {
            let hand = new Hand({cards: []})
            expect(hand.getAllCards()).toEqual([])
        })
    })

    describe('getCardsCount', () => {
        it('return nbr cards', () => {
            let hand = new Hand({cards: [1, 2, 3]})
            expect(hand.getCardsCount()).toEqual(3)
        })

        it('return 0 card', () => {
            let hand = new Hand({cards: []})
            expect(hand.getCardsCount()).toEqual(0)
        })
    })
})