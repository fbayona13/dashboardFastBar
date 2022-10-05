import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./Dashboard";
import { BrowserRouter } from "react-router-dom";
import './sass/main.scss'

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <Dashboard />
        </BrowserRouter>
    </React.StrictMode>
);
