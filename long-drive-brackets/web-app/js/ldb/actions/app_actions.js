var Constants = require('../constants');
var Dispatcher = require('../dispatcher/dispatcher');

var AppActions = {
    updatePath: function(path) {
        Dispatcher.dispatch({
            action: Constants.UPDATE_APP_PATH,
            path: path
        });
    }
};

module.exports = AppActions;
