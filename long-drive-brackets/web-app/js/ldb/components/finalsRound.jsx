var React = require('react');
var Row = require('./row.jsx');
var Column = require('./column.jsx');
var Set = require('./set.jsx');
var FinalsGroup = require('./finalsGroup.jsx');

var FinalsRound = React.createClass({
    render: function() {
        var finals = this.props.finals;
        var final12Rows = [];
        var final8Rows = [];
        var final4Rows = [];
        var final2Rows = [];
        if(finals) {

            for(g in finals.final12) {
                final12Rows.push(<FinalsGroup group={finals.final12[g]}/>);
                final12Rows.push(<br></br>);
            }
            for(g in finals.final8) {
                final8Rows.push(<FinalsGroup group={finals.final8[g]}/>);
                final8Rows.push(<br></br>);
            }
            for(g in finals.final4) {
                final4Rows.push(<FinalsGroup group={finals.final4[g]}/>);
                final4Rows.push(<br></br>);
            }
            for(g in finals.final2) {
                final2Rows.push(<FinalsGroup group={finals.final2[g]}/>);
                final2Rows.push(<br></br>);
            }
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
                </Row>

            </div>

        );
    }
});

module.exports = FinalsRound;
