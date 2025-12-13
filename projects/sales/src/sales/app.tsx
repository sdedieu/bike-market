import React from 'react';
import { Redirect, Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import { ChildA } from './child-a';
import { ChildB } from './child-b';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/sales/child-a">
            <h1 class="text-3xl font-bold underline">Hello world!</h1>
          </Link>
        </ul>
        <Switch>
          <Route path="/sales/child-a">
            <ChildA />
          </Route>
          <Route path="/sales/child-b">
            <ChildB />
          </Route>
          <Redirect from="/" to="/sales/child-a" />
          <Redirect from="/sales" to="/sales/child-a" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
