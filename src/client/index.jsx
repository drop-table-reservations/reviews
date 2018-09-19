import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reviews from './components/Reviews';
import setFonts from './globalStyles';

setFonts();

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/restaurants/:restaurantId/reviews"
        render={(props) => {
          const { match } = props;
          const { restaurantId } = match.params;
          return <Reviews restaurantId={restaurantId} />;
        }}
      />
      <Route path="/" render={() => <div>Oops! Wrong turn</div>} />
    </Switch>
  </Router>
);


// <Switch>
// <Route path="/" exact component={HomePage} />
// <Route path="/users/add" component={UserAddPage} />
// <Route path="/users" component={UsersPage} />
// <Redirect to="/" />
// </Switch>

ReactDOM.render(<App />, document.getElementById('reviews'));

export default App;
