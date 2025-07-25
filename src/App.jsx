import React, { useImperativeHandle } from 'react'
import './App.css';
import Home from './assets/pages/Home';
import MovieCard from './assets/components/MovieCard';
import TextCard from './assets/components/TextCard';
import About from './assets/components/About';
import Footer from './assets/pages/Footer';

function App() {
  return (
    <>
    <main>
   <Home/>
   <MovieCard/>
   <TextCard/>
   <About/>
   <Footer/>
   </main>
    </>
      
  
  )
}

export default App
