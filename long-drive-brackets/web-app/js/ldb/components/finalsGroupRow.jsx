var React = require('react');

var FinalsGroupRow = React.createClass({
    render: function() {
        var player = this.props.player;
        return (
            <tr>
                <td className="groupNameWidth">{player.name}</td>
                <td>{player.distance}</td>
            </tr>
        );
    }
});

module.exports = FinalsGroupRow;
