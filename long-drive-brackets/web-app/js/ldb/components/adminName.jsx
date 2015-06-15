var React = require('react');

var AdminName = React.createClass({
    render: function() {

          return (
              <select class="browser-default">
                <option value="" disabled selected>Select Hitter</option>
                <option value="1">Option 1</option>

                </select>
          );


    }
});

module.exports = AdminName;
