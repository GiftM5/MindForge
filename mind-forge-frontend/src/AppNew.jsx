import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import AIAssistant from './components/AIAssistant';
import CodeMentor from './components/CodeMentor';
import BalanceTracker from './components/BalanceTracker';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ai-assistant" element={<AIAssistant />} />
        <Route path="/code-mentor" element={<CodeMentor />} />
        <Route path="/balance-tracker" element={<BalanceTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
