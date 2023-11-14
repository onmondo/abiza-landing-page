import React from "react";
import logo from '../../assets/logo-transparent.png';

function Navigation(props) {
    return (
        <section id="navigation">
            <img src={logo} onClick={() => { props.openPage(event, 'goToHome') }}></img>
            <nav>
                <ul>
                    <li><a href="#aboutme" onClick={() => { props.openPage(event, 'goToHome') }}>Home</a></li>
                    <li><a href="#travelpartner" onClick={() => { props.openPage(event, 'goToHome') }}>Partners</a></li>
                    <li><a href="#contactus" onClick={() => { props.openPage(event, 'goToHome') }}>Contact Us</a></li>
                    {/* <li>FAQ</li> */}
                </ul>
            </nav>
        </section>

    )
}

export default Navigation;
