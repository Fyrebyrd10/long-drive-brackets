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
      var rows = [];
      if(bracket) {
        for(s in bracket.rounds) {
          rows.push(<Round round={bracket.rounds[s]} />);
        }
      }
        return (
            <div>
                <NavBar/>
                  <ul className="tabs">
                    <li className="tab col s3"><a className="active" href="#round1">Round 1</a></li>
                    <li className="tab col s3"><a href="#round2">Round 2</a></li>
                    <li className="tab col s3"><a href="#round3">Round 3</a></li>
                  </ul>
                  <div className="section no-pad-bot" id="index-banner">
                    <div className="container">
                {rows}
              </div>
            </div>
            </div>
        );
    }
});

module.exports = Bracket;
