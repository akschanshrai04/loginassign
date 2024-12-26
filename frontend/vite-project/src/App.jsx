import React from "react";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Signuppage from "./pages/Signuppage";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {
          <PrivateRoute>
            <Homepage />
          </PrivateRoute>
          } />
        <Route path="/login" element = {
          <PublicRoute>
            <Loginpage />
          </PublicRoute>
          } />
        <Route path="/signup" element = {
          <PublicRoute>
            <Signuppage />
          </PublicRoute>
          } />
      </Routes>

      <Toaster />

    </BrowserRouter>
    
  )
}

export default App;
