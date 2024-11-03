import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DocumentSimplifier from './pages/DocumentSimplifier';
import DocumentDrafter from './pages/DocumentDrafter';
import ConsultExperts from './pages/ConsultExperts';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/simplify" element={<DocumentSimplifier />} />
          <Route path="/draft" element={<DocumentDrafter />} />
          <Route path="/consult" element={<ConsultExperts />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;