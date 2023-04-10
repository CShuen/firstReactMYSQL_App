import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { StrictMode } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        
        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="pageone" element={<PageOne />} />
                <Route path="pagetwo" element={<PageTwo/>} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
