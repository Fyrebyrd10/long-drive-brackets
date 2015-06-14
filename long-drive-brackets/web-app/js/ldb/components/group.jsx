var React = require('react');
var GroupRow = require('./groupRow.jsx');

var Group = React.createClass({
    render: function() {
        var group = this.props.group;
        var rows = [];
        if(group) {
          for(r in group.records) {
            rows.push(<GroupRow record={group.records[r]}/>);
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
