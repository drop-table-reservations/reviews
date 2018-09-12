import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';

const App = () => (
  <div className="reviews">
    <h1>Hello Rob</h1>
    <Reviews />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = { App };
