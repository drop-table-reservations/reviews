import React from 'react';
import ReactDOM from 'react-dom';
import Review from './components/Review';

const App = () => (
  <div>
    <h1>Hello Rob</h1>
    <Review />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
