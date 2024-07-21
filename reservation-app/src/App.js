import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Reservations from './pages/Reservations';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function App() {
  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => console.log('Axios data:', response.data))
      .catch(error => console.error('Error fetching data with axios:', error));
  }, []);

  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reservations" element={<Reservations />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
