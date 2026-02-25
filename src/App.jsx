import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Trust from './components/Trust';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Initialize Telegram WebApp if it exists
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
      // Optional: Set header color to match app theme
      window.Telegram.WebApp.setHeaderColor('#000000');
    }
  }, []);

  return (
    <div className="min-h-screen relative flex flex-col items-center selection:bg-magenta selection:text-white bg-black">
      <Header />
      <div className="w-full relative z-10 flex-grow">
        <Hero />
        <Trust />
        <Services />
        <Team />
        <Testimonials />
        <BookingForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
