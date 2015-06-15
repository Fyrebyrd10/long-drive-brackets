var React = require('react');
var GroupRow = require('./groupRow.jsx');

var Group = React.createClass({
    render: function() {
        var group = this.props.group;
        var pathname = window.location.pathname;

        var rows = [];
        if(group) {
          for(r in group.records) {
            rows.push(<GroupRow record={group.records[r]}/>);
          }
          if(pathname.indexOf('admin') != -1) {
            rows.push(<tr><td><a className="waves-effect waves-light btn">update</a></td><td></td><td></td></tr>);
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
