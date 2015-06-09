var React = require('react');
var NavBar = require('./navbar.jsx');
var Round = require('./round.jsx');
var BracketStore = require('../stores/bracket_store');
var BracketActions = require('../actions/bracket_actions.js');


var getStateFromStores = function() {
    return {
        bracket: BracketStore.getBracket()
    }
};

var Bracket = React.createClass({
    getInitialState: function() {
        return getStateFromStores();
    },

    componentDidMount: function() {
        BracketActions.loadBracket();
        BracketStore.addChangeListener(this._onChange);
    },

    componentWillUnMount: function() {
        BracketStore.removeChangeListener(this._onChange);
    },

    _onChange: function() {
        this.setState(getStateFromStores());
    },

    render: function() {
      var bracket = this.state.bracket;
      var round1 = null;
      if(bracket) {

        round1 = bracket.round1;

      }
        return (
            <div>
                <NavBar/>
                <Round round={round1}/>
            </div>
        );
    }
});

module.exports = Bracket;
