import React from 'react';
import './App.css';
import Navbar from './components/Navbar/index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages';
import CaringGuide from './pages/caringGuide';
import GeneCalculator from './pages/geneCalculator';
import Contact from './pages/contact';
import Donation from './pages/donation';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/caringGuide' component={CaringGuide} />
        <Route path='/geneCalculator' component={GeneCalculator} />
        <Route path='/contact-us' component={Contact} />
        <Route path='/donation' component={Donation} />
      </Switch>
    </Router>
  );
}

export default App;
