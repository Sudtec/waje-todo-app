import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TodoApp from './components/TodoApp/TodoApp';
import Login from './components/Login/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './components/AuthContext';
import './App.css'
import Home from './components/Home/Home';


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/todos"
            element={<ProtectedRoute element={TodoApp} />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
