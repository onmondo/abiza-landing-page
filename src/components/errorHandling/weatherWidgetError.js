import React from "react";
import loading from "../../assets/loading-twotone-loop.svg"

export default function WeatherWidgetError() {
    return (
        <dl>
            <dt>Error weather API call</dt>
            <dd>
                <img src={loading} role="presentation" alt="Loading GIF from Giphy" />
                Something wrong with the weather API
            </dd>
        </dl>
    )
}