import React from "react";
import logo from '../../assets/logo-transparent.png';

function Navigation() {
    return (
        <section id="navigation">
            <img src={logo}></img>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Partners</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                </ul>
            </nav>
        </section>

    )
}

export default Navigation;
