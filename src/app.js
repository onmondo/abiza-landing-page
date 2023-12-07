import React from "react";
import Navigation from "./components/headerSection/nav.js";
import Home from "./pages/home.js";
import TermsAndCondition from "./pages/termsAndCondition.js";
import FooterSection from "./components/footerSection.js";
import Partners from "./pages/partners.js";

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

    const copyToClipboardHandler = (event, phoneNumber) => {
        event.preventDefault();
        navigator.clipboard.writeText(`${phoneNumber.areaCode}${phoneNumber.number}`)
    }

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'openTermsAndCondition':
                return {
                    componentDisplayed: <TermsAndCondition
                        phoneNumbers={phoneNumbers}
                        websiteName={websiteName}
                        copyToClipboardHandler={copyToClipboardHandler}
                    />,
                };
            case 'openPartners':
                return {
                    componentDisplayed: <Partners />
                }
            case 'goToHome':
                return {
                    componentDisplayed: <Home
                        openPage={openPage}
                        phoneNumbers={phoneNumbers}
                        copyToClipboardHandler={copyToClipboardHandler}
                        websiteName={websiteName}
                    />
                }
            default:
                throw new Error();
        }
    }, {
        componentDisplayed: <Home
            openPage={openPage}
            // phoneNumbers={phoneNumbers}
            // copyToClipboardHandler={copyToClipboardHandler}
            websiteName={websiteName}
        />
    });

    const openPage = (event, type) => {
        dispatch({ type });
    };

    return (
        <>
            <Navigation
                openPage={openPage}
                phoneNumbers={phoneNumbers}
                copyToClipboardHandler={copyToClipboardHandler}
            />
            {state.componentDisplayed}
            <FooterSection
                openPage={openPage}
                websiteName={websiteName}
                phoneNumbers={phoneNumbers}
                copyToClipboardHandler={copyToClipboardHandler}
            />
        </>
    )
}

export default App;
