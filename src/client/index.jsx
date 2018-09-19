import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Reviews from './components/Reviews';
import setFonts from './globalStyles';

setFonts();

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/restaurants/:restaurantId/reviews"
        exact
        render={({ match }) => {
          const { restaurantId } = match.params;
          return <Reviews restaurantId={restaurantId} />;
        }}
      />
      <Route path="/" render={() => <p>Oops! Wrong turn</p>} />
    </Switch>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;
