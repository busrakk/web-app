import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MasterLayout from './layouts/admin/MasterLayout';
import Dashboard from './components/admin/Dashboard';
import Login from './components/frontend/auth/Login';
import Register from './components/frontend/auth/Register';

function App() {
  return (
    <>
    <Router>
        <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<MasterLayout/> } >
            <Route path='/admin/dashboard' element={<Dashboard />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
