var React = require('react');
var GroupRow = require('./groupRow.jsx');
var AdminButton = require('./adminButton.jsx');

var Group = React.createClass({
    render: function() {
        var group = this.props.group;
        var players = this.props.players;
        var pathname = window.location.pathname;

        var rows = [];
        var recordIds = [];
        if(group) {

          for(r in group.records) {
            recordIds.push(group.records[r].id);
            rows.push(<GroupRow record={group.records[r]} players={players}/>);
          }
          if(pathname.indexOf('admin') != -1) {
            rows.push(<AdminButton recordIds={recordIds}/>);
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
