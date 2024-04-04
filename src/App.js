import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import ContactFormModal from './components/ContactFormModal';
import NavBar from './components/NavBar';
import ContactInfoFooter from './components/ContactInfoFooter';
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <NavBar />
        <div>
          <button
            className="fixed bottom-4 right-4 bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full z-50"
            onClick={() => setIsModalOpen(true)}
          >
            Contacta'ns
          </button>
          {isModalOpen && <ContactFormModal onClose={() => setIsModalOpen(false)} />}
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <ContactInfoFooter />
      </div>
    </Router>
  );
}

export default App;
