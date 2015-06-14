var React = require('react');
var Row = require('./row.jsx');
var Set = require('./set.jsx');
var SetTotals = require('./setTotals.jsx');

var Round = React.createClass({
    render: function() {
        var round = this.props.round;
        var roundId = null;
        var rows = [];
        if(round) {
          roundId = "round" +round.id;
          for(s in round.sets) {
            rows.push(<Set set={round.sets[s]} setNumber={parseInt(s) + 1}/>);
          }
          rows.push(<SetTotals players={round.players}/>)
        }
        return (

                  <div id={roundId}>
                  <Row>
                    {rows}
                  </Row>

              </div>

        );
    }
});

module.exports = Round;
