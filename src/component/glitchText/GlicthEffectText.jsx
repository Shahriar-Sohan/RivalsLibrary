import React from 'react';
import './GlitchEffectText.css';

const GlitchEffectText = ({children}) => {
    return (
        <div className="hero-container">
            
            <h2 className="hero glitch layers movement paths" ><span>{children}</span></h2>
            
        </div>
    );
};

export default GlitchEffectText;