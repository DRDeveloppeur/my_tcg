"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
    function Hand() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cards: [], limit: limit };

        _classCallCheck(this, Hand);

        this.limit = config.limit;
        this.cards = config.cards;
        if (!config.limit) {
            this.limit = 7;
        }
    }

    _createClass(Hand, [{
        key: "addCard",
        value: function addCard(card) {
            if (this.limit > this.cards.length && card) {
                this.cards[this.cards.length] = card;
                return true;
            }
            return false;
        }
    }, {
        key: "removeCard",
        value: function removeCard(position) {
            if (this.cards.length > 0 && this.cards[position]) {
                return this.cards.splice(position, 1);
            }
            return false;
        }
    }, {
        key: "getAllCards",
        value: function getAllCards() {
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Hand;
}();

exports.default = Hand;


module.exports = Hand;