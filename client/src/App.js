import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import Contact from './pages/Contact';
import About from './pages/About';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900 text-white">
        <Navbar token={token} setToken={setToken} />
        <Switch>
          <Route exact path="/" component={() => <Home token={token} />} />
          <Route path="/dashboard" component={() => <Dashboard token={token} />} />
          <Route path="/login" component={() => <Login setToken={setToken} />} />
          <Route path="/register" component={Register} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;