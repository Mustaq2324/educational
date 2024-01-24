import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About'; // Import other pages as needed
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Courses from './Pages/Courses';
import Contact from './Pages/Contact';
import PriceCardMobile from './Components/PriceCard/PriceCardMobile';
import NiosMobile from './Components/PriceCard/NiosMobile';
import StateBoardMobile from './Components/PriceCard/StateBoardMobile';
import Admission from './Pages/Admission';
import Join from './Pages/Join';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cbse" element={<PriceCardMobile />} />
        <Route path="/nios" element={<NiosMobile />} />
        <Route path="/state" element={<StateBoardMobile />} />
        <Route path="/admission" element={<Admission />} />

        <Route path="/carrers" element={<Join />} />

        {/* Add more routes for other pages if needed */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
