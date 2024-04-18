import React, { useEffect, lazy, Suspense } from "react";
import Navigation from "./components/headerSection/nav.js";
import Home from "./pages/home.js";
// import TermsAndCondition from "./pages/termsAndCondition.js";
import FooterSection from "./components/footerSection.js";
// import Partners from "./pages/partners.js";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// import Amenities from "./pages/amenities.js";
import homestay from './assets/homestay.png';
import room1A from './assets/room1A.jpeg';
import room1B from './assets/room1B.jpeg';
import room2A from './assets/room2A.jpeg';
import room2B from './assets/room2B.jpeg';
import crA from './assets/crA.jpeg';
import crB from './assets/crB.jpeg';
import parking from './assets/parking.jpg';
import loading from "./assets/loading-twotone-loop.svg";
import './App.scss';

const TermsAndCondition = lazy(() => import("./pages/termsAndCondition.js"));
const Partners = lazy(() => import("./pages/partners.js"));
const Amenities = lazy(() => import("./pages/amenities.js"));

export function App() {
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

    const amenities = [
        {
            src: homestay,
            alt: 'The house',
            hash: 'LVFicG9FD%sS_NIoRQn$yXW;V?s.'
        },
        // {
        //     src: bookingDotComAward,
        //     alt: 'Booking.com award',
        //     hash: null,
        // },
        {
            src: room1A,
            alt: 'Room 1 A',
            hash: 'LUKKyf~qD%RkM}-pt6oJ%1D%axt7'
        },
        {
            src: room1B,
            alt: 'Room 1 B',
            hash: 'LPPPy89v~q-pyE$|?abI%Mo#t7bH',
        },
        {
            src: room2A,
            alt: 'Room 2 A',
            hash: 'LTNTqC~p_N009a-;-;IU-;M_IU%M'
        },
        {
            src: room2B,
            alt: 'Room 2 B',
            hash: 'LaLqIa~WM~M_S%xvaISP%2RObds,'
        },
        {
            src: crA,
            alt: 'Rest Room A',
            hash: 'LIIhdHofxutR_NM{xuof%MM{xuof'
        },
        {
            src: crB,
            alt: 'Rest Room B',
            hash: 'LKIX]hV@IUoe_NRjIUj[xaWBM{fQ',
        },
        {
            src: parking,
            alt: 'Parking',
            hash: 'LRI=iIVrxvR%tpoLWTxv?vxZofox'
        }
    ]

    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }, [pathname])

    return (
        <>
            <Navigation
                phoneNumbers={phoneNumbers}
            />
            <AnimatePresence>
                <Switch location={location} key={location.key}>
                    <Route exact path="/">
                        <Home websiteName={websiteName} amenities={amenities} />
                    </Route>
                    <Suspense fallback={<img src={loading} role="presentation" alt="Loading GIF from Giphy" />}>
                        <Route path="/partners">
                            <Partners />
                        </Route>
                        <Route path="/termsandcondition">
                            <TermsAndCondition
                                phoneNumbers={phoneNumbers}
                                websiteName={websiteName}
                            />
                        </Route>
                        <Route path="/amenities">
                            <Amenities amenities={amenities} />
                        </Route>
                    </Suspense>
                </Switch>
            </AnimatePresence>
            <FooterSection
                websiteName={websiteName}
                phoneNumbers={phoneNumbers}
            />
        </>
    )
}
