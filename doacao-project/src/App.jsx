import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './Pages/Home.jsx'
import DonationDog from './Pages/DonationDog.jsx'
import InformationDog from './Pages/InformationDog.jsx'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/donationdog" element={<DonationDog/>} />
        <Route path="/animals/:id" element={<InformationDog/>} /> 
      </Routes>
    </Router>
  );
}

export default App
