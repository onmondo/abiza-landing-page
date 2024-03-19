import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/main.css";
import "./styles/screenLargeSize.css";
import "./styles/screenMediumSize.css";
import "./styles/screenSmallSize.css";
import "./styles/screenXSmallSize.css";
import "./styles/screenXXSmallSize.css";
import { BrowserRouter as Router } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode>
    <Router>
        <App />
    </Router>

    // </React.StrictMode>
);
