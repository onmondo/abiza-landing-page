import React from "react";
import Navigation from "./components/headerSection/nav.js";
import Home from "./pages/home.js";
import TermsAndCondition from "./pages/termsAndCondition.js";
import FooterSection from "./components/footerSection.js";
import Partners from "./pages/partners.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
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

    // const copyToClipboardHandler = (event, phoneNumber) => {
    //     event.preventDefault();
    //     navigator.clipboard.writeText(`${phoneNumber.areaCode}${phoneNumber.number}`)
    // }

    // const openPage = (event, type) => {
    //     dispatch({ type });
    // };

    // const [state, dispatch] = React.useReducer((state, action) => {
    //     switch (action.type) {
    //         case 'openTermsAndCondition':
    //             return {
    //                 componentDisplayed: <TermsAndCondition
    //                     phoneNumbers={phoneNumbers}
    //                     websiteName={websiteName}
    //                 />,
    //             };
    //         case 'openPartners':
    //             return {
    //                 componentDisplayed: <Partners />
    //             }
    //         case 'goToHome':
    //             return {
    //                 componentDisplayed: <Home
    //                     openPage={openPage}
    //                     websiteName={websiteName}
    //                 />
    //             }
    //         default:
    //             throw new Error();
    //     }
    // }, {
    //     componentDisplayed: <Home
    //         openPage={openPage}
    //         websiteName={websiteName}
    //     />
    // });

    return (
        <Router>
            <Navigation
                phoneNumbers={phoneNumbers}
            />
            {/* {state.componentDisplayed} */}
            <Switch>
                <Route exact path="/">
                    <Home
                        websiteName={websiteName}
                    />
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
            <FooterSection
                websiteName={websiteName}
                phoneNumbers={phoneNumbers}
            />
        </Router>
    )
}

export default App;
