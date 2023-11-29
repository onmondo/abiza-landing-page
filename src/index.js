import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/main.css";
import "./styles/screenLargeSize.css";
import "./styles/screenMediumSize.css";
import "./styles/screenSmallSize.css";
import "./styles/screenXSmallSize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
