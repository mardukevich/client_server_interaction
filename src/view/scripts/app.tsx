import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './login';

export function App() {
  const [loggedIn, setLoggedIn] = React.useState(false)
  const [email, setEmail] = React.useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
      </Routes>
    </BrowserRouter>
  );
}

