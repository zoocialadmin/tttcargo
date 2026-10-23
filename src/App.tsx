import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tracking from './components/Tracking';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Cotizador from './components/Cotizador';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'cotizador'>('home');

  return (
    <>
      <Navbar onNavigate={setCurrentPage} />

      {currentPage === 'home' ? (
        <main className="wrap">
          <Hero onNavigate={setCurrentPage} />
          <Tracking />
          <Services />
          <HowItWorks onNavigate={setCurrentPage} />
        </main>
      ) : (
        <Cotizador />
      )}

      <Footer />
    </>
  );
}

export default App;