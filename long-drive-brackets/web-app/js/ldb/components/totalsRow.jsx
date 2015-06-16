var React = require('react');

var TotalsRow = React.createClass({
    render: function() {
        var player = this.props.player;
        return (
            <tr>
                <td className="groupNameWidth">{player.name}</td>
                <td>{player.totalScore}</td>
            </tr>
        );
    }
});

module.exports = TotalsRow;
