import React from "react";
import "../styles/termsAndCondition.css";
import { motion } from "framer-motion";
import { containerVariant } from "./animationVariants"

function TermsAndCondition(props) {
    return (
        <motion.section
            id="termsandcondition"
            variants={containerVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <header>
                <h1>Terms and Condition</h1>
                <p>Terms and Conditions for {props.websiteName} Website</p>
            </header>
            <article>
                <ol>
                    <li>
                        <h4>Acceptance of Terms</h4>
                        <p>By using the services provided by {props.websiteName}, you agree to abide by the terms and conditions outlined herein. If you do not agree with any part of these terms, please refrain from using our services.</p>
                    </li>
                    <li>
                        <h4>Booking and Reservations</h4>
                        <ul>
                            <li>
                                <h5>Reservation Confirmation</h5>
                                <p>All reservations are subject to availability and confirmation by {props.websiteName}.</p>
                            </li>
                            <li>
                                <h5>Payment</h5>
                                <p>Payment details, including rates, fees, and cancellation policies, will be clearly communicated during the booking process.</p>
                            </li>
                            <li>
                                <h5>Cancellation Policy</h5>
                                <p>{props.websiteName} has a specific cancellation policy, which guests are encouraged to review before making reservations.</p>
                            </li>
                            <li>
                                <h5 id="refundpolicy">Refund Policy</h5>
                                <p>Guest cancellations more than 1 day before check-in will get a 100% refund; 1 day or fewer before check-in and no shows will get 0% refund.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Check-in and Check-out</h4>
                        <ul>
                            <li>
                                <h5>Check-in</h5>
                                <p>Check-in window is from 2:00 PM to 10:00 PM, and guests are required to provide valid identification upon arrival.</p>
                            </li>
                            <li>
                                <h5>Check-out</h5>
                                <p>Check-out time is 12:00 PM, and late check-outs may be subject to additional charges.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Guest Responsibilities</h4>
                        <ul>
                            <li>
                                <h5>Conduct</h5>
                                <p>Guests are expected to conduct themselves in a respectful manner and adhere to any rules or guidelines provided by {props.websiteName}.</p>
                            </li>
                            <li>
                                <h5>Damages</h5>
                                <p>Guests are responsible for any damages caused to the property or its contents during their stay.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Privacy and Security</h4>
                        <ul>
                            <li>
                                <h5 id="privacypolicy">Privacy Policy</h5>
                                <p>{props.websiteName} respects the privacy of guests. Please refer to our Privacy Policy for details on the collection and use of personal information.</p>
                            </li>
                            <li>
                                <h5>Security</h5>
                                <p>{props.websiteName} takes reasonable measures to ensure the security of guests and their belongings; however, guests are encouraged to take necessary precautions.</p>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h4>Limitation of Liability</h4>
                        <p>{props.websiteName} shall not be held liable for any loss, damage, or injury incurred during the stay, including but not limited to personal injuries, theft, or property damage.</p>
                    </li>
                    <li>
                        <h4>Changes to Terms</h4>
                        <p>{props.websiteName} reserves the right to update or modify these terms and conditions at any time. Changes will be effective upon posting on the website.</p>
                        <p>By using {props.websiteName} services, you acknowledge that you have read, understood, and agreed to these terms and conditions.</p>
                        <p>
                            For any questions or clarifications, please contact us at these numbers
                            {
                                props.phoneNumbers.map((phoneNumber, index) =>
                                    <a key={index} href={`tel:${phoneNumber.areaCode}${phoneNumber.number}`} id={phoneNumber.number}>
                                        {`${phoneNumber.areaCode}-${phoneNumber.number} `}
                                    </a>
                                )
                            }
                        </p>
                    </li>
                </ol>
            </article>
        </motion.section>
    )
}

export default TermsAndCondition;
