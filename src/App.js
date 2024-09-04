import './App.css';
import React, {useState,useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route, Switch, Link } from 'react-router-dom';

import Loading from './components/Loading';
import NavBar from './components/NavBar';
import Card from './components/Card';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import About from './components/About';
import OurTeam from './components/OurTeam';
import Footer from './components/Footer';
function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        setIsLoading(false);
    }, 2000); // Loading for 2 seconds
}, []);
  return (
    <div className="App">
      <Router>
        <NavBar />
        {isLoading ? <Loading /> : (
          <Routes>
            {/* Route for Card page with About and OurTeam */}
            <Route path="/" element={
              <>
                <Card />
                <About />
                <OurTeam />
                <Footer />
              </>
            } />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/login" element={<LogIn />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
