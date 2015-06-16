var React = require('react');
var FinalsGroupRow = require('./finalsGroupRow.jsx');
var AdminButton = require('./adminButton.jsx');

var FinalsGroup = React.createClass({
    render: function() {
        var group = this.props.group;
        var players = this.props.players;
        var pathname = window.location.pathname;
        var recordIds = [];

        var rows = [];
        if(group) {
          for(p in group.records) {
            recordIds.push(group.records[p].id);
            rows.push(<FinalsGroupRow record={group.records[p]} players={players}/>);
          }
          if(pathname.indexOf('admin') != -1) {
            rows.push(<AdminButton isFinals="true" recordIds={recordIds}/>);
          }
        }
        return (
          <table className="bordered">
            <thead>
              <tr>
                <th>Player</th>
                <th>Distance</th>
              </tr>
            </thead>
            {rows}
          </table>
        );
    }
});

module.exports = FinalsGroup;
