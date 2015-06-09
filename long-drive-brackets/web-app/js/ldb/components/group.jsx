var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var GroupRow = require('./groupRow.jsx');

var Group = React.createClass({
    render: function() {
        var group = this.props.group;
        var rows = [];
        if(group) {
          for(p in group.players) {
            rows.push(<GroupRow player={group.players[p]}/>);
          }
        }
        return (
          <table className="bordered">
            <thead>
              <tr>
                <th>Player</th>
                <th>Distance</th>
                <th>Points</th>
              </tr>
            </thead>
            {rows}
          </table>
        );
    }
});

module.exports = Group;
