var Dispatcher = require('../dispatcher/dispatcher');
var Constants = require('../constants');
var Store = require('./store');
var _ = require('lodash');

// This is the initial path.
var _path = '/';

var setPath = function(path) {
    _path = path;
};

var AppStore = _.assign({}, Store, {
    dispatcherIndex: Dispatcher.register(function(payload) {
        var action = payload.action;
        var path = payload.path;

        switch(action.actionType) {
            case Constants.UPDATE_APP_PATH:
                setPath(path);
                this.emitChange();
                break;
        }

        return true;
    }),

    getPath: function() {
        return _path;
    }
});

module.exports = AppStore;
