import React from "react";
import Navigation from "./components/headerSection/nav.js";
import Home from "./pages/home.js";
import TermsAndCondition from "./pages/termsAndCondition.js";
import FooterSection from "./components/footerSection.js";

function App() {
    const websiteName = 'Abiza Homestay';
    const phoneNumbers = [
        {
            areaCode: '+63',
            number: '9177053956'
        },
        {
            areaCode: '+63',
            number: '9204754533'
        }
    ]

    const [state, dispatch] = React.useReducer((state, action) => {
        switch (action.type) {
            case 'openTermsAndCondition':
                return {
                    isTermsAndConditionPageOpen: true
                };
            case 'goToHome':
                return {
                    isTermsAndConditionPageOpen: false
                }
            default:
                throw new Error();
        }
    }, { isTermsAndConditionPageOpen: false });

    const openPage = (event, type) => {
        dispatch({ type });
    };

    return (
        <>
            <Navigation openPage={openPage} />
            {
                (state.isTermsAndConditionPageOpen)
                    ? <TermsAndCondition phoneNumbers={phoneNumbers} websiteName={websiteName} />
                    : <Home openPage={openPage} phoneNumbers={phoneNumbers} />
            }
            <FooterSection openPage={openPage} websiteName={websiteName} />
        </>
    )
}

export default App;
