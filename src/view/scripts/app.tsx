import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './login';
import './App.css';

export function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState("")

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
      </Routes>
    </BrowserRouter>
  );
}

