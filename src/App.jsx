// App.jsx
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Profile from './pages/Profile'
import Services from "./pages/Services";
import ServiceDetails from './pages/ServiceDetails'
import AllSalons from './pages/AllSalons'


const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/home" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/service-details" element={<ServiceDetails />} />
            <Route path="/all-salons" element={<AllSalons />} />
        </Routes>
    );
};

export default App;
