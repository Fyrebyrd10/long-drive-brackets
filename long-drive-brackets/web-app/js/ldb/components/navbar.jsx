var React = require('react');

var NavBar = React.createClass({
    render: function() {
        return (
          <nav className="light-blue lighten-1" role="navigation">
            <div className="nav-wrapper container">
              <a id="logo-container" href="#" className="brand-logo">Long Drive Brackets</a>
            </div>
          </nav>
        );
    }
});

module.exports = NavBar;
