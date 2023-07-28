import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MasterLayout from "./layouts/admin/MasterLayout";
import Dashboard from "./components/admin/Dashboard";
import Login from "./layouts/auth/Login";
import Register from "./layouts/auth/Register";
import Category from "./components/admin/category";
import Product from "./components/admin/product";
import Users from "./components/admin/user";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin/" element={<MasterLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="category" element={<Category />} />
            <Route path="product" element={<Product />} />
            <Route path="users" element={<Users />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
