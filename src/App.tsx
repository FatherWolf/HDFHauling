import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import Dashboard from './pages/Dashboard/Dashboard';
// import Settings from './pages/Dashboard/Settings';
import Privacy from './pages/Privacy';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<Privacy />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
