import React, { useState } from 'react';
import { headerTextWhite } from '../styles/styles';

const HeaderWhite = ({ title }) => {
    return (
        <h1 style={headerTextWhite}>
            {title}
        </h1>
    );
}

const HoverButton = ({ href, title }) => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            href={href}
            style={{ color: hovered ? '#b4d744' : 'white', fontSize: '1rem'}}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {title}
        </a>
    );
};



export { HeaderWhite, HoverButton };

