import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import CreateTable from './components/createTable';
import ListOfTable from './components/listOfTable';

const useRoutes = () => {
  return (
    <Switch>
      <Route path="/create" exact>
        <CreateTable />
      </Route>
      <Route path="/list" exact>
        <ListOfTable />
      </Route>
      <Redirect to="/create" />
    </Switch>
  );
};

export default useRoutes;
