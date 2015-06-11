var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var Set = require('./set.jsx');
var Group = require('./group.jsx');

var FinalsRound = React.createClass({
    render: function() {
        var finals = this.props.finals;
        var rows = [];
        if(finals) {

            for(g in finals.final12) {
                rows.push(<Group group={finals.final12[g]}/>);
                rows.push(<br></br>);
            }
            //rows.push(<SetTotals players={round.players}/>)
        }
        return (

            <div id="finals">
                <Row>
                    <Column>
                        <div className="center">
                            <h4>Final 12</h4>
                        </div>
                        {rows}
                    </Column>
                </Row>

            </div>

        );
    }
});

module.exports = FinalsRound;
