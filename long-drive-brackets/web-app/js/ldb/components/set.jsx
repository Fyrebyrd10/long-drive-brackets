var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var Group = require('./group.jsx');

var Set = React.createClass({
    render: function() {
        var set = this.props.set;
        var setNumber = this.props.setNumber;
        var group1 = null;
        var group2 = null;
        var group3 = null;
        var group4 = null;
        var group5 = null;



        var rows = [];
        if(set) {
          console.log(set);
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
