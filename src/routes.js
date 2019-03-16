"use strict";

var React = require('react');
var Author = require('./components/authors/authorPage');
var About = require('./components/about/aboutPage');

var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={require('./Components/app')}>
  <DefaultRoute handler={require('./Components/homePage')} />
  <Route path="/authors" name="authors" handler={Author}/>
  <Route path="/about" name="about" handler={About}/>
</Route>
);

module.exports = routes;
