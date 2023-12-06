import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from './login';
import { Home } from './home';

export function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

