import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./Login";
import { Signup } from "./Signup";
import { Products } from "./Products";
import { Contact } from "./Contact";
import { About } from "./About";

export const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};
