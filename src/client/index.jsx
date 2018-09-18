import React from 'react';
import ReactDOM from 'react-dom';
import Reviews from './components/Reviews';
import SampleRestaurant from './components/__data__/restaurant.data';
import injectGlobal from './globalStyles.jsx';

const App = () => <Reviews reviews={SampleRestaurant.reviews} />;

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
