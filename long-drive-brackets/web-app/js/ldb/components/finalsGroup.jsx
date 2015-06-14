var React = require('react');
var FinalsGroupRow = require('./finalsGroupRow.jsx');

var FinalsGroup = React.createClass({
    render: function() {
        var group = this.props.group;
        var rows = [];
        if(group) {
          for(p in group.players) {
            rows.push(<FinalsGroupRow player={group.players[p]}/>);
          }
        }
        return (
          <table className="bordered">
            {rows}
          </table>
        );
    }
});

module.exports = FinalsGroup;
