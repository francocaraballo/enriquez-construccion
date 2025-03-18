// App.jsx (componente principal en React estándar)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Otras rutas si las necesitas */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;