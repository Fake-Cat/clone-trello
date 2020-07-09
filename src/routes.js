import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateTable from './pages/createTable';
import ListOfBoard from './pages/listOfBoard';
import Board from './pages/board';

const useRoutes = () => {
  return (
    <Switch>
      <Route path="/create" exact>
        <CreateTable />
      </Route>
      <Route path="/list-of-board" exact>
        <ListOfBoard />
      </Route>
      <Route path="/:BoardId">
        <Board />
      </Route>
      <Redirect to="/create" />
    </Switch>
  );
};

export default useRoutes;
