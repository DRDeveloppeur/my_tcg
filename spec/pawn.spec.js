import Pawn from "../src/models/pawn";

describe('Pawn', () => {
    describe('Methods exists', () => {
        it('getLife exist', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getLife).not.toBe(undefined)
        })

        it('getStrength exist', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getStrength).not.toBe(undefined)
        })

        it('getDef exist', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getDef).not.toBe(undefined)
        })

        it('attack exist', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.attack).not.toBe(undefined)
        })

        it('recieveAttack exist', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.recieveAttack).not.toBe(undefined)
        })
    })

    describe('getLife', () => {
        it('getLife return int', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getLife()).toEqual(jasmine.any(Number))
        })

        it('getLife return the Life', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getLife()).toEqual(10)
        })
    })

    describe('getStrength', () => {
        it('getStrength return int', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getStrength()).toEqual(jasmine.any(Number))
        })

        it('getStrength return the Strength', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getStrength()).toEqual(8)
        })
    })

    describe('getDef', () => {
        it('getDef return int', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getDef()).toEqual(jasmine.any(Number))
        })

        it('getDef return the Def', () => {
            let pawn = new Pawn(10, 8, 5)
            expect(pawn.getDef()).toEqual(5)
        })
    })

    describe('attack, recieveAttack', () => {
        it('attack et contre-ataque', () => {
            let pawn = new Pawn(10, 8, 5)
            let pawn2 = new Pawn(10, 8, 5)
            pawn.attack(pawn2)
            expect(pawn.attack).toEqual(jasmine.any(Function))
            expect(pawn.life).toEqual(5)
            expect(pawn2.life).toEqual(2)
            
        })
    })
})