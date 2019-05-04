import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import BoardModel from './board';
import HandModel from './hand';
import CemetaryModel from './cemetary';

export default {
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}, {"face":"card-1"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    },
    "board": {
        "class": BoardModel,
        "parem": '{}'
    },
    "hand": {
        "class": HandModel,
        "parem": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}], "limit" : 5}'
    },
    "cemetary": {
        "class": CemetaryModel,
        "parem": '{}'
    }
}