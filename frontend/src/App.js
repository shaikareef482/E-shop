import React from 'react';
import "./App.css";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import {LoginPage,SignupPage } from './Router.js'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
        <Route path='/sign-up' element={<SignupPage/>}/>

    
    </Routes>
    </BrowserRouter>
  );
}

export default App;
