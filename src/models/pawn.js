import EventManager from "../eventManager";

export default class Pawn extends EventManager {
    constructor (life, strength, def) {
        super()
        
        this.life = life
        this.strength = strength
        this.def = def
    }

    getLife () {
        return this.life
    }

    getStrength () {
        return this.strength
    }

    getDef () {
        return this.def
    }

    attack (Pawn) {
        Pawn.recieveAttack(this)
    }
      
    recieveAttack (Pawn, strikeBack = false) {
        if (!strikeBack) {
            this.life = this.life - Pawn.strength
            Pawn.recieveAttack(this, true)
        }
        if (strikeBack === true) {
            this.life = this.life - Pawn.def
        }
    }
}

module.exports = Pawn