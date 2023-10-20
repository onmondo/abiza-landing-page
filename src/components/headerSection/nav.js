import React from "react";
import logo from '../../assets/logo-transparent.png';

function Navigation() {
    return (
        <section id="navigation">
            <img src={logo}></img>
            <nav>
                <ul>
                    <li><a href="#aboutme">Home</a></li>
                    <li><a href="#travelpartner">Partners</a></li>
                    <li><a href="#contactus">Contact Us</a></li>
                    {/* <li>FAQ</li> */}
                </ul>
            </nav>
        </section>

    )
}

export default Navigation;
