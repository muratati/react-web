import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/Header';
import './components/Footer';
import './components/Body';

function App() {
  return (
    <div className="main">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
