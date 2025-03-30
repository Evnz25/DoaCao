import react from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx'
import DonationDog from './Pages/DonationDog.jsx'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/DonationDog" element={<DonationDog/>}/>
      </Routes>
    </Router>
  );
}

export default App
