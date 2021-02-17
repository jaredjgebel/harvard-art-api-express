import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ArtObjectContainer from "./components/art-object/ArtObjectContainer";
import Header from "./components/header/Header";

function App() {
  return (
    <Router>
      <Header />

      <Switch>
        <Route exact path="/">
          <Link to="/objects">Objects</Link>
        </Route>
        <Route path="/objects">
          <ArtObjectContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
