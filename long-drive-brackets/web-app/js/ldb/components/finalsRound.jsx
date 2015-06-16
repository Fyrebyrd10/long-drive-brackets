var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var Set = require('./set.jsx');
var FinalsGroup = require('./finalsGroup.jsx');

var FinalsRound = React.createClass({
    render: function() {
        var finals = this.props.finals;
        var players = this.props.players;
        var final12Rows = [];
        var final8Rows = [];
        var final4Rows = [];
        var final2Rows = [];
        var champion = [];
        if(finals) {

            for(g in finals.final12) {
                final12Rows.push(<FinalsGroup group={finals.final12[g]} players={players}/>);
                final12Rows.push(<br></br>);
            }
            for(g in finals.final8) {
                final8Rows.push(<FinalsGroup group={finals.final8[g]} players={players}/>);
                final8Rows.push(<br></br>);
            }
            for(g in finals.final4) {
                final4Rows.push(<FinalsGroup group={finals.final4[g]} players={players}/>);
                final4Rows.push(<br></br>);
            }
            for(g in finals.final2) {
                final2Rows.push(<FinalsGroup group={finals.final2[g]} players={players}/>);
                final2Rows.push(<br></br>);
            }
            champion.push(<FinalsGroup group={finals.champion} players={players}/>);

        }
        return (

            <div id="finals">
                <Row>
                    <Column>
                        <div className="center">
                            <h4>Final 12</h4>
                        </div>
                        {final12Rows}
                    </Column>
                    <Column>
                        <div className="center">
                            <h4>Final 8</h4>
                        </div>
                        {final8Rows}
                    </Column>
                    <Column>
                        <div className="center">
                            <h4>Final 4</h4>
                        </div>
                        {final4Rows}
                    </Column>
                    <Column>
                        <div className="center">
                            <h4>Final 2</h4>
                        </div>
                        {final2Rows}
                    </Column>
                    <Column>
                        <div className="center">
                            <h4>Champion</h4>
                        </div>
                        {champion}
                    </Column>
                </Row>

            </div>

        );
    }
});

module.exports = FinalsRound;
