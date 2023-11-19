import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./styles/main.css";
import "./styles/headerSection.css";
import "./styles/bookingSection.css";
import "./styles/contactUs.css";
import "./styles/screenLargeSize.css";
import "./styles/screenMediumSize.css";
import "./styles/screenSmallSize.css";
import "./styles/screenXSmallSize.css";
import "./styles/destinationSection.css";
import "./styles/footerSection.css";
import "./styles/reviews.css";
import "./styles/termsAndCondition.css";
import "./styles/amenities.css";
import "./styles/partners.css";
import "./styles/location.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
