import React from 'react';
import Editor from './components/Editor';
import Home from './components/Home/Home';
import Pages from './components/Pages';
import Pagestemp from './components/Pages/Pagestemp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import './components/Home/Home'
import Template from './components/Template/Template';
import Preview from './components/Template/Preview';
// import Editonly from './components/Editonly';

function App() {
  return (
    // <>
    //   <h1 className="text-3xl text-black font-bold underline">
    //     Hello world!
    //   </h1>
    // </>
    <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/template' element={<Template />} />
        <Route path='/editor/:id' element={<Editor />} />
        <Route path='/pages' element={<Pagestemp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/preview/:id' element={<Preview />} />
        {/* <Route path='/pa/:id' element={<Preview />} /> */}

      </Routes>
    </Router>
  );
}

export default App;
