import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from "react";
import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Adduser from './component/Adduser';
import Viewuser from "./component/Viewuser";


function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adduser" element={<Adduser />} />
        <Route path="/adduser/:id" element={<Adduser />} />
        <Route path="/viewuser/:id" element={<Viewuser />} />
      </Routes>
  );
}

export default App;
