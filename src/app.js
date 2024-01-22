import React from "react";
import Navigation from "./components/headerSection/nav.js";
import Home from "./pages/home.js";
import TermsAndCondition from "./pages/termsAndCondition.js";
import FooterSection from "./components/footerSection.js";
import Partners from "./pages/partners.js";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

function App() {
    const location = useLocation();
    const websiteName = 'Abiza Homestay';
    const phoneNumbers = [
        {
            areaCode: '+63',
            number: '9177053956',
            viberName: 'Aiza Blando'
        },
        {
            areaCode: '+63',
            number: '9204754533'
        }
    ]

    return (
        <>
            <Navigation
                phoneNumbers={phoneNumbers}
            />
            <AnimatePresence>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <Home websiteName={websiteName} />
                    </Route>
                    <Route path="/partners">
                        <Partners />
                    </Route>
                    <Route path="/termsandcondition">
                        <TermsAndCondition
                            phoneNumbers={phoneNumbers}
                            websiteName={websiteName}
                        />
                    </Route>
                </Switch>
            </AnimatePresence>
            <FooterSection
                websiteName={websiteName}
                phoneNumbers={phoneNumbers}
            />
        </>
    )
}

export default App;
