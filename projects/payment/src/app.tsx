import React from 'react';
import { Redirect, Switch, BrowserRouter, Route, Link } from 'react-router-dom';
import { ChildA } from './child-a';
import { ChildB } from './child-b';

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <Link to="/payment/child-a">Child A</Link>
          <Link to="/payment/child-b">Child B</Link>
        </ul>
        <Switch>
          <Route path="/payment/child-a">
            <ChildA />
          </Route>
          <Route path="/payment/child-b">
            <ChildB />
          </Route>
          <Redirect from="/" to="/payment/child-a" />
          <Redirect from="/payment" to="/payment/child-a" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
