import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/screens/Header';
import Places from './components/screens/Places';
import Place from './components/screens/Place';
import "./App.css";

 function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Places />}/>
        <Route path="places" element={<Places />}/>
        <Route path="place/:id" element={<Place />}/>
      </Routes>
    </Router>
  )
}
export default App;