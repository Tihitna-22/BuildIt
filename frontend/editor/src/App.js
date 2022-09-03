import React from 'react';
import Editor from './components/Editor';
import Home from './components/Home';
import Pages from './components/Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/editor' element={<Editor />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
