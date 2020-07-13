import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateTable from './pages/createTable';
import Navbar from './components/navbar';
import ListOfBoard from './pages/listOfBoard';
import Board from './pages/board';

const useRoutes = () => {
  return (
    <Switch>
      <Route path="/create" exact>
        <Navbar />
        <CreateTable />
      </Route>
      <Route path="/list-of-board" exact>
        <Navbar />
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
