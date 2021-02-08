import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ArtObjectContainer from "./components/art-object/ArtObjectContainer";

function App() {
  return (
    <Router>
      <Link to="/objects">Objects</Link>

      <Switch>
        <Route path="/objects">
          <ArtObjectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
