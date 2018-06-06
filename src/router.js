import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Login from './routes/Login'
import MovieList from './routes/MovieList'
import SelectTickets from './routes/SelectTickets'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/login" exact component={Login}/>
        <Route path="/movieList" exact component={MovieList}/>
        <Route path="/selectTicket" exact component={SelectTickets}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
