import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import VerifyCode from './Pages/VerifyCode';
import ResetPassword from "./Pages/ResetPassword";
import CompleteData from "./Pages/CompleteData";
import Login from "./Pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-code" element={<VerifyCode />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/complete-data" element={<CompleteData />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
