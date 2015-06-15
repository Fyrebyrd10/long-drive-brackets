var React = require('react');
var AdminName = require('./adminName.jsx');

var GroupRow = React.createClass({
    render: function() {
        var record = this.props.record;
        var players = this.props.players;

        var player = null;
        if(record) {
          player = record.player;
        }
        var pathname = window.location.pathname;
        var distanceId = "distance" + record.id;
        var scoreId = "score" + record.id;
        var nameId = "name" + record.id;

        if(pathname.indexOf('admin') != -1) {
          return (
              <tr>
                  <td className="groupNameWidth"><AdminName nameId={nameId} player={player} players={players}/></td>
                  <td className="adminScoreWidth"><input id={distanceId} type="text" value={record.distance}></input>
                    </td>
                  <td className="adminScoreWidth"><input id={scoreId} type="text" value={record.score}></input></td>
              </tr>
          );
        } else {
          return (
              <tr>
                  <td className="groupNameWidth">{record.player.name}</td>
                  <td>{record.distance}</td>
                  <td>{record.score}</td>
              </tr>
          );
        }
    }
});

module.exports = GroupRow;
