import React from 'react';
import './App.css';
import Header from './Componentes/Header'; 
import Footer from './Componentes/Footer';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          
        </Routes>
        <Footer />      
      </BrowserRouter>
    </div>
  );
}

export default App;
