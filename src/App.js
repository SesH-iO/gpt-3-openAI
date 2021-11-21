import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT, Header } from './containers';
import { CTA, Brand, Navbar } from './components';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="gradient__bg">
        <Navbar />
        <Header />
      </header>
      <Brand />
      <WhatGPT />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
