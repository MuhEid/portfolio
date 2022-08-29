import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Home from './routes/Home';


function App() {
  return (
    <div className="flex min-h-screen flex-col bg-green-50">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
