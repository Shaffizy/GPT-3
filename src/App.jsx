import { useState } from 'react'
import './App.css'

import { Blog, Footer, Header, Possibility, Features, WhatGPT3 } from './Container/Index.jsx';
import { Article, Brand, CTA, Feature, Navbar } from './Component/Index.jsx';

function App() {

  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
      
    </div>
  )
}

export default App
