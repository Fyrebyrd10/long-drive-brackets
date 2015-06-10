var React = require('react');
var Column = require('./column.jsx');
var TotalsRow = require('./totalsRow.jsx');

var SetTotals = React.createClass({
    render: function() {
        var players = this.props.players;
        var rows = [];
        if(players) {
          for(p in players) {
            rows.push(<TotalsRow player={players[p]}/>);
          }
        }
        return (
          <Column>
            <div className="center">
              <h4>Totals</h4>
            </div>
            <table className="bordered">
              <thead>
                <tr>
                  <th>Player</th>
                  <th>Points</th>
                </tr>
              </thead>
              {rows}
            </table>
          </Column>
        );
    }
});

module.exports = SetTotals;
