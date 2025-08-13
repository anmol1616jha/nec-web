import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AppProvider } from './contexts/AppContext';
import './styles/main.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <NavBar />
          <main className="flex-grow container mx-auto px-4 py-8 page-transition">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;