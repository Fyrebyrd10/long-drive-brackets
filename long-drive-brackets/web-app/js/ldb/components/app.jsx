var React = require('react');
var AppActions = require('../actions/app_actions');
var AppStore = require('../stores/app_store');
var page = require('page');

var App = React.createClass({
    getInitialState: function() {
        return this._getState();
    },

    componentWillMount: function() {
        page('/asdf', this._updatePath);
    },

    componentDidMount: function() {
        AppStore.addChangeListener(this._onChange);
        page('asdf')
    },

    componentWillUnmount: function() {
        AppStore.removeChangeListener(this._onChange);
    },

    render: function() {
        return (
            <h1>{this.state.path}</h1>
        );
    },

    _updatePath: function(context) {
        console.log('asdf');
        AppActions.updatePath(context.pathname);
    },

    _onChange: function() {
        this.setState(this._getState());
    },

    _getState: function() {
        return {
            path: AppStore.getPath()
        };
    }
});

module.exports = App;
