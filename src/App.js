import { BrowserRouter, Routes, Route } from "react-router-dom";
import VendorForm from './Components/VendorForm';
import ResourceForm from './Components/ResourceForm';
import Dashboard from './Components/Dashboard';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VendorForm />} />
        <Route path="/resource" element={<ResourceForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
