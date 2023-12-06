import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';
import { Path } from '../../path/paths';

export function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={Path.Home} element={<Home />} />
        <Route path={Path.Login} element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

