import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './HomePage/Home.jsx'
import DonationAnimal from './DonationAnimalPage/DonationAnimal.jsx'
import InformationAnimal from './AnimalInformationPage/InformationAnimal.jsx'
import RegisterAnimal from './RegisterAnimalPage/RegisterAnimal.jsx';
import RegisterClient from "./RegisterClientPage/RegisterClient.jsx";
import RegisterEmployee from "./RegisterEmployeePage/RegisterEmployee.jsx";
import DonationInformationAnimal from "./AnimalDonationInformationPage/DonationInformationAnimal.jsx";
import EmployeeLogin from "./Login/EmployeeLogin.jsx";
import DonationEmployee from "./DonationEmployeePage/DonationEmployee.jsx";

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donationanimal" element={<DonationAnimal/>} />
        <Route path="/animals/:id" element={<InformationAnimal />} />
        <Route path="/animalsregister/" element={<RegisterAnimal />} />  
        <Route path="/clientregister/:animalId" element={<RegisterClient />} />
        <Route path="/employeeregister/" element={<RegisterEmployee />} />
        <Route path="/donationinformationanimal/:id" element={<DonationInformationAnimal />} />
        <Route path="/employeelogin/" element={<EmployeeLogin />} />
        <Route path="/donationemployee/" element={<DonationEmployee />} />
      </Routes>
    </Router>
  );
}

export default App
