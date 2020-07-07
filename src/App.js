import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Navbar from './components/navbar';
import useRoutes from './routes';

import 'materialize-css';

function App() {
  const routes = useRoutes();
  return (
    <BrowserRouter>
      <div className="container-fluid">
        <Navbar />
        {routes}
      </div>
    </BrowserRouter>
  );
}

export default App;
