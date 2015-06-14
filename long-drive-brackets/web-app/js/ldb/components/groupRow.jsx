var React = require('react');

var GroupRow = React.createClass({
    render: function() {
        var record = this.props.record;
        return (
            <tr>
                <td className="groupNameWidth">{record.player.name}</td>
                <td>{record.distance}</td>
                <td>{record.score}</td>
            </tr>
        );
    }
});

module.exports = GroupRow;
