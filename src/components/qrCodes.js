import React from 'react';
import QRCode from "react-qr-code";
import '../styles/qrCodes.css'
function QRCodes() {
    return (
        <section id="qrcodes">
            <QRCode value="Test" />
        </section>
    )
}

export default QRCodes;
