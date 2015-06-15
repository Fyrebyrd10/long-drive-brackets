var React = require('react');

var AdminName = React.createClass({
    render: function() {
          var players = this.props.players;
          var player = this.props.player;
          var nameId = this.props.nameId;
          var rows = [];
          if(players) {
            for(p in players) {
                rows.push(<option value={players[p].id}>{players[p].name}</option>);
            }
          }
          return (
              <select id={nameId} class="browser-default">
                <option value={player.id} >{player.name}</option>
                  {rows}
                </select>
          );


    }
});

module.exports = AdminName;
