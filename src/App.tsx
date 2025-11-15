import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { AnimatePresence } from 'framer-motion';
export function App() {
  return <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main className="pt-16">
        {' '}
        {/* Add padding-top to account for fixed header */}
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>;
}