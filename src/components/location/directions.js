import React from "react";
import Direction from "./direction";

function Directions() {
    const directions = [
        {
            title: 'Directions from Matnog Port',
            routes: [
                {
                    id: 'via Pan-Philippine Hwy/AH26',
                    details: ['Head northwest on Pan-Philippine Hwy/AH26'],
                    estimatedTime: '13 min',
                    distance: '7.9 km'
                }
            ],
            location: 'Destination will be on the right',
            directionUrl: 'https://goo.gl/maps/AKEup7hPz3iLkZEN6',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Matnog_Port_arch_%28National_Road%2C_Matnog%2C_Sorsogon%3B_04-26-2023%29.jpg',
            imgAlt: 'Matnog Port'
        },
        {
            title: 'Directions from Legazpi Airport Terminal Building',
            routes: [
                {
                    id: 'via Pan-Philippine Hwy/AH26',
                    details: [
                        'Take Magayon Dr and Maroroy Rd to Bicol 630/Daraga - Legazpi City - Tiwi Rd/Gen. Luna St in Daraga',
                        'Drive to Pan-Philippine Hwy/AH26 in Matnog'
                    ],
                    estimatedTime: '2hr 9min',
                    distance: '115 km'
                },
                {
                    id: 'via Sorsogon Diversion Rd and Pan-Philippine Hwy/AH26',
                    details: [
                        'Follow Magayon Dr to Daraga-Legazpi Diversion Rd/Lakandula Dr in Daraga',
                        'Follow Pan-Philippine Hwy/AH26 to Sorsogon Diversion Rd in Sorsogon City',
                        'Turn left onto Sorsogon Diversion Rd',
                        'Drive to Pan-Philippine Hwy/AH26 in Matnog'
                    ],
                    estimatedTime: '2hr 9min',
                    distance: '116 km'
                }
            ],
            location: 'Destination will be on the right',
            directionUrl: 'https://goo.gl/maps/XecwcrZ6B5G44T4D9',
            imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Legazpi_Airport_Terminal.JPG',
            imgAlt: 'Legazpi Airport Terminal'
        }
    ]
    return (
        <address className="destinations">
            {directions.map((direction, index) => {
                return (<Direction key={index} direction={direction} />)
            })}
        </address>
    )
}

export default Directions;