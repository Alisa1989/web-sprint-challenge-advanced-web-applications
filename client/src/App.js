import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
        <div className="navigation">
          <Link to="/Login" className="link">Login</Link>
          <Link to="/protected" className="link">Bubble Page</Link>
        </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={BubblePage} />
        <Route exact path="/" component={Login} />
        <Route component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
