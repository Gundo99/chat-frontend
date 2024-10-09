import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import NumberManagement from './components/NumberManagement';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
       
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/" element={<NumberManagement/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </Router>
  );
};

export default App;