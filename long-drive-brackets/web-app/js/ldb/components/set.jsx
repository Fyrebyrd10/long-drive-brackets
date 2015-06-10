var React = require('react');
var Column = require('./column.jsx');
var Group = require('./group.jsx');

var Set = React.createClass({
    render: function() {
        var set = this.props.set;
        var setNumber = this.props.setNumber;
        var rows = [];
        if(set) {
          for(g in set.groups) {
            rows.push(<Group group={set.groups[g]}/>);
            rows.push(<br></br>);
          }
        }
        return (
          <Column>
            <div className="center">
              <h4>Set {setNumber}</h4>
            </div>
            {rows}
          </Column>
        );
    }
});

module.exports = Set;
