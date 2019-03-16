"use strict";

var React = require('react');

var About = React.createClass({
    render: function(){
      return (
        <div >
           <h1>About</h1>
           <p>
              The technologies used are:
              <u1>
                 <li>React</li>
                 <li>React Router</li>
                 <li>Flux</li>
                 <li>Browserify</li>
                 <li>Node</li>
                 <li>Gulp</li>
              </u1>    
           </p>
        </div>
      );
    }
});

module.exports = About;
