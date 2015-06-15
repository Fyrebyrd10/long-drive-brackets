var Constants = require('../constants');
var Dispatcher = require('../dispatcher/dispatcher');
var request = require('superagent');

var dispatchError = function(error, action) {
    Dispatcher.dispatch({
        action: action,
        error: error
    });
};

var hasError = function(err, res) {
    return err || res.status >= 400;
};



var getError = function(err, res) {
    if(err) {
        return err;
    }
    return {
        message: 'There was a problem with the server.'
    };
};

var BracketActions = {
    loadBracket: function(search) {
        Dispatcher.dispatch({
            action: Constants.LOAD_BRACKET
        });
        request
            .get('bracket/')
            .set('Accept', 'application/json')
            .end(function(err, res){
                if(hasError(err, res)) {
                    dispatchError(getError(err, res), Constants.LOAD_BRACKET_FAILED);
                    return;
                }

                Materialize.toast('Bracket Loaded!', 2500);
                var bracket="";
                var body = JSON.parse(res.text);
                bracket = body.bracket;
                var players = body.players;

                Dispatcher.dispatch({
                    action: Constants.LOAD_BRACKET_SUCCESS,
                    bracket: bracket,
                    players:players
                });
                setInitialDisplays();


            });


    }
};

module.exports = BracketActions;
