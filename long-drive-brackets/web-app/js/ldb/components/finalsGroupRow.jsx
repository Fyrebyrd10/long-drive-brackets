var React = require('react');
var AdminName = require('./adminName.jsx');

var FinalsGroupRow = React.createClass({
  getInitialState: function() {
    return {distance: this.props.record.distance};
  },
  handleDistanceChange: function(event) {
    this.setState({distance: event.target.value});
  },
    render: function() {
        var record = this.props.record;
        var players = this.props.players;
        var distance = this.state.distance;


        var pathname = window.location.pathname;
        var player = null;
        if(record) {
          player = record.player;
        }
        var distanceId = "distance" + record.id;
        var nameId = "name" + record.id;
        if(pathname.indexOf('admin') != -1) {
          return (
              <tr>
                  <td className="groupNameWidth"><AdminName nameId={nameId} player={player} players={players}/></td>
                  <td className="adminScoreWidth">
                    <input id={distanceId} type="text" value={distance} onChange={this.handleDistanceChange}></input>
                  </td>
              </tr>
          );
        } else {
        return (
            <tr>
                <td className="groupNameWidth">{record.player.name}</td>
                <td>{record.distance}</td>
            </tr>
        );
      }
    }
});

module.exports = FinalsGroupRow;
