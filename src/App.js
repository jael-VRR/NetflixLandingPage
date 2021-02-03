import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import MediaPlayerV from "./pages/MediaPlayerV.jsx";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Switch>
        <Route path="/mediaPlayerV">
          <MediaPlayerV />
        </Route>
      </Switch>
      </Switch>
    </Router>
  );
}

export default App;
