"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck() {
        var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { cards: [] };

        _classCallCheck(this, Deck);

        this.cards = config.cards;
    }

    _createClass(Deck, [{
        key: "shuffle",
        value: function shuffle() {
            var test = 0;
            if (this.cards && this.cards.length != 0) {
                for (var position = this.cards.length - 1; position >= 1; position--) {
                    var hasard = Math.floor(Math.random() * (position + 1));
                    var sauve = this.cards[position];
                    this.cards[position] = this.cards[hasard];
                    this.cards[hasard] = sauve;
                    if (this.cards[position] == this.cards[hasard]) {
                        test++;
                    }
                }
                if (test == this.cards.length - 1) {
                    return false;
                }
                return true;
            }
            return false;
        }
    }, {
        key: "draw",
        value: function draw() {
            if (this.cards && this.cards.length !== 0) {
                return this.cards.shift();
            }

            return false;
        }
    }, {
        key: "insertAt",
        value: function insertAt(card, position) {
            if (this.cards && position) {
                this.cards.splice(position, 0, card);
            }
            if (!position && card && this.cards) {
                this.cards.push(card);
            }
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            if (this.cards) {
                return this.cards.length;
            }
            return 0;
        }
    }]);

    return Deck;
}();

exports.default = Deck;


module.exports = Deck;