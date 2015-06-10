var React = require('react');

var Row = React.createClass({
    render: function() {
        return (
            <div id={this.props.id} className='row'>{this.props.children}</div>
        );
    }
});

module.exports = Row;
