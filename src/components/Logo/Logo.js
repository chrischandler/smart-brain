import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
 

const Logo = () => {
    return (
        <div className="ma4 nt0">
            <Tilt className="Tilt" options={{ max : 75 }} style={{ height: 150, width: 150 }} >
                <div className="Tilt-inner pa3">
                    <img style={{paddingTop: '5px'}} src="https://img.icons8.com/fluent/96/000000/brain.png" alt=""/>
                </div>
            </Tilt>
        </div>
        )
}

export default Logo;