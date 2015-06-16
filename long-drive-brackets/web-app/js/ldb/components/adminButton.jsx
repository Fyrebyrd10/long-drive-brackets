var React = require('react');

var AdminButton = React.createClass({
    clickz: function() {
      click(this.props.recordIds);
    },
    render: function() {
        var recordIds = this.props.recordIds;
        var isFinals = this.props.isFinals;
        var pathname = window.location.pathname;
        var rows = [];
        if(isFinals != "true") {
          rows.push(<td></td>);
        }

        return (
          <tr>
            <td>
              <a onClick={this.clickz} className="waves-effect waves-light btn">update</a>
            </td>
            <td></td>
            {rows}

          </tr>

        );
    }
});

module.exports = AdminButton;
