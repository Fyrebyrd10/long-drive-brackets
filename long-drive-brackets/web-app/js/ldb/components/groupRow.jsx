var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');

var GroupRow = React.createClass({
    render: function() {
        var player = this.props.player;
        return (
            <tr>
                <td>{player.name}</td>
                <td>{player.distance}</td>
                <td>300</td>
            </tr>
        );
    }
});

module.exports = GroupRow;
