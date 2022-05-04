import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyCode from './Pages/VerifyCode';
import ResetPassword from "./Pages/ResetPassword";
import CompleteData from "./Pages/CompleteData";
import Login from "./Pages/Login";
import HomePage from "./Pages/HomePage";
import Products from "./Pages/Products";
import Services from "./Pages/Services";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/complete-data" element={<CompleteData />} />
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
