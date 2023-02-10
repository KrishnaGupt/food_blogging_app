import React from 'react';
import './App.css';
import About from './components/About';
import Articles from './components/Articles';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
  return (
    <div>
      <Hero/>
      <About/>
      <Articles/>
      <Footer/>
    </div>
  );
}

export default App;
