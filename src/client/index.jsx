import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import SampleRestaurant from './components/__data__/restaurant.data';
import setFonts from './globalStyles';

setFonts();

const App = () => <Reviews reviews={SampleRestaurant.reviews} />;

window.Reviews = App;

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
