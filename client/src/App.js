import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Category from "./components/admin/category";
import Product from "./components/admin/product";
import Users from "./components/admin/user";
import axios from "axios";
import Page404 from "./layouts/error/Page404";
import AdminRoute from "./protectedRoute/AdminRoute";
import Master from "./layouts/frontend/Master";
import Home from "./components/frontend/Home";

axios.defaults.baseURL = process.env.REACT_APP_BACKEND_ROOT_URL;;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("auth_token");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Master />}>
            <Route path="" element={<Home />} />
          </Route>
          <Route path="/admin/" element={<AdminRoute />}>
            <Route
              path=""
              element={<Navigate replace to="/admin/dashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="product" element={<Product />} />
            <Route path="users" element={<Users />} />
          </Route>
           <Route path="*" element={<Page404 />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
