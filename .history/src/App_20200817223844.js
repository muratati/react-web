import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Body from './components/Body';

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
