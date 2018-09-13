import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import SampleRestaurant from './components/__data__/restaurant.data';

const App = () => <Reviews reviews={SampleRestaurant.reviews} />;

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = { App };
