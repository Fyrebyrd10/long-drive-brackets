var React = require('react');

var AdminButton = React.createClass({
    clickz: function() {
      click(this.props.recordIds);
    },
    render: function() {
        var recordIds = this.props.recordIds;
        return (
          <tr>
            <td>
              <a onClick={this.clickz} className="waves-effect waves-light btn">update</a>
            </td>
            <td></td>
            <td></td>

          </tr>

        );
    }
});

module.exports = AdminButton;
