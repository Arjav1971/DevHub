import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout>
                <Home />
              </Layout>
            }
          />
          <Route path="about" element={<Layout><About /></Layout>} />
          <Route path="contact" element={<Layout><Contact /></Layout>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
