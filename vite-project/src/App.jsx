import React from 'react';
import Components from './components/composant.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App(){
  return (
    <>
    <Router>
      <Routes>
        <Route path= "/" element={<Components />}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
