'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _factory = require('./factory');

var _factory2 = _interopRequireDefault(_factory);

var _pawn = require('./pawn');

var _pawn2 = _interopRequireDefault(_pawn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Player = function (_Pawn) {
    _inherits(Player, _Pawn);

    function Player(config) {
        _classCallCheck(this, Player);

        var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this));

        console.log(config);

        // this.type = config.type;


        _this.deck = _factory2.default.get('deck');
        _this.board = _factory2.default.get('board');
        _this.hand = _factory2.default.get('hand');
        _this.cemetary = _factory2.default.get('cemetary');

        if (!config.deck) {
            config.deck = _this.deck || [];
        }
        return _this;
    }

    _createClass(Player, [{
        key: 'shuffle',
        value: function shuffle() {
            var deck = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "deck";

            console.log(config.deck);
            console.log(deck);
        }
    }, {
        key: 'draw',
        value: function draw() {
            return this.deck.draw();
        }
    }, {
        key: 'playCard',
        value: function playCard() {}
    }, {
        key: 'discard',
        value: function discard() {}
    }, {
        key: 'attack',
        value: function attack() {}
    }]);

    return Player;
}(_pawn2.default);

exports.default = Player;


module.exports = Player;