var React = require('react');

var Column = React.createClass({
    render: function() {
        var classNames = ['col'];
        if(this.props.s) classNames.push('s' + this.props.s);
        if(this.props.m) classNames.push('m' + this.props.m);
        if(this.props.others) classNames.push(this.props.others);
        return (
            <div className={classNames.join(' ')} style={this.props.style}>{this.props.children}</div>
        );
    }
});

module.exports = Column;