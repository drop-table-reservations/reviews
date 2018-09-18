import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import SampleRestaurant from './components/__data__/restaurant.data';
import setFonts from './globalStyles';

setFonts();

const App = () => <Reviews reviews={SampleRestaurant.reviews} />;

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;
