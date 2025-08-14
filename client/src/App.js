import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import axios from "axios";
import { Toaster } from "react-hot-toast";
import React, { Children, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "./redux/authSlice";
import RouteListener from "./hooks/RouteListener";
import CreateParametersPage from "./pages/CreateParametersPage";
import CreateWorkoutPage from "./pages/CreateWorkoutPage";
import EditProfilePage from "./pages/EditProfilePage";
import CardioPage from "./pages/CardioPage";
import LoadingSpin from "./components/reusable-components/LoadingSpin";

axios.defaults.baseURL = process.env.REACT_APP_API_UR
axios.defaults.withCredentials = true;

function App() {
  const loading = useSelector((state) => state.authuser.loading);
  const isAuthenticated = useSelector(
    (state) => state.authuser.isAuthenticated
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  const PrivateRoute = ({children}) => {
    return isAuthenticated ? children : <Navigate to="/login"/>
  }

  return (
    <div className="App">
      <RouteListener />
      <Toaster position="top-right" toastOptions={{ duration: 2500 }} />

      {loading ? (
        <LoadingSpin />
      ) : (
        <Routes>
          {/* Public routes */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />

          {/* Private routes */}
          <Route path="/" element={<PrivateRoute><HomePage /></PrivateRoute>} />
          <Route path="/parameters" element={<PrivateRoute><CreateParametersPage /></PrivateRoute>} />
          <Route path="/create-plan" element={<PrivateRoute><CreateWorkoutPage /></PrivateRoute>} />
          <Route path="/editprofile" element={<PrivateRoute><EditProfilePage /></PrivateRoute>} />
          <Route path="/cardio" element={<PrivateRoute><CardioPage /></PrivateRoute>} />
        </Routes>
      )}
    </div>
  );
}

export default App;
