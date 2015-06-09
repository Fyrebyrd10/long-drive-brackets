var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var Set = require('./set.jsx');

var Round = React.createClass({
    render: function() {
        var round = this.props.round;
        var set1 = null;
        var set2 = null;
        var set3 = null;
        var set4 = null;
        var set5 = null;



        var rows = [];
        if(round) {
          for(s in round.sets) {
            rows.push(<Set set={round.sets[s]} setNumber={s}/>);
          }
        }
        return (
              <div className="section no-pad-bot" id="index-banner">
                <div className="container">
                  <Row>
                    {rows}

                  </Row>
                </div>
              </div>

        );
    }
});

module.exports = Round;
