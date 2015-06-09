var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants');
var SubscriberActions = require('../actions/bracket_actions.js');
var Store = require('./store');
var _ = require('lodash');

var _bracket = null;

var _is_loading = false;
var _error = null;

var setBracket = function(bracket) {
  _bracket = bracket;
};

var setError = function(error) {
    // Look at this page to figure out what should happen.
    // http://visionmedia.github.io/superagent/#error-handling
    _error = error.message;
}

var BracketStore = _.assign({}, Store, {
    getBracket: function() {

        // Get bracket object.
        return _bracket;
    }
});

BracketStore.dispatchToken = Dispatcher.register(function(payload) {
    var action = payload.action;
    var bracket = payload.bracket;

    var error = payload.error;

    switch(action) {
        case Constants.LOAD_BRACKET:
            _is_loading = true;
            BracketStore.emitChange();
            break;
        case Constants.LOAD_BRACKET_SUCCESS:
            _error = null;
            setBracket(bracket);
            BracketStore.emitChange();
            break;
        case Constants.LOAD_BRACKET_FAILED:
            this.setError(error);
            BracketStore.emitChange();
            break;
    }
});

module.exports = BracketStore;
