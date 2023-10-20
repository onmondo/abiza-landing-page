import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app";
import "./styles/main.css";
import "./styles/headerSection.css";
import "./styles/bookingSection.css";
import "./styles/contactUs.css";
import "./styles/screenMediumSize.css";
import "./styles/screenSmallSize.css";
import "./styles/screenXSmallSize.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
