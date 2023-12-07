import React from "react";
import logo from '../../assets/logo-transparent.png';

function Navigation(props) {
    const { openPage, phoneNumbers, copyToClipboardHandler } = props;
    return (
        <section id="navigation">
            <img src={logo} onClick={() => { openPage(event, 'goToHome') }}></img>
            <nav>
                <ul>
                    <li><a href="#aboutme" onClick={() => { openPage(event, 'goToHome') }}>Home</a></li>
                    <li><a href="#travelpartner" onClick={() => { openPage(event, 'goToHome') }}>Partners</a></li>
                    <li>
                        {
                            phoneNumbers.map((phoneNumber, index) =>
                                <>
                                    &#160;
                                    <a href="#" id={phoneNumber.number} onClick={() => { copyToClipboardHandler(event, phoneNumber) }}>
                                        {`(0${phoneNumber.number.substring(0, 3)}) ${phoneNumber.number.substring(3, 6)} ${phoneNumber.number.substring(6, 10)}`}
                                    </a>
                                    &#160;
                                </>
                            )
                        }


                    </li>
                    {/* <li>FAQ</li> */}
                </ul>
            </nav>
        </section>

    )
}

export default Navigation;
