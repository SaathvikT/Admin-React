/* eslint-disable strict */ //Disabling the check because we can't run strict strict mode. Need global vars.

$ = jQuery = require('jQuery');
var React = require('react');
var Header = require('./commons/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
  render: function() {
   return (
      <div>
        <Header/>
        <div className="container-fluid">
        <Router.RouteHandler/>
        </div>
      </div>
    );
  }
});

module.exports = App;
