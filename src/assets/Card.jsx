import React, { useState } from 'react';
import KakashiImage from './cardPics/Kakashi.jpg'; 

const Card = ({ title, content }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isImgHovered, setIsImgHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleImgMouseEnter = () => {
        setIsImgHovered(true);
    };

    const handleImgMouseLeave = () => {
        setIsImgHovered(false);
    };

    const Styles = {
        card: {
            cursor: "pointer",
            position: "relative",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
            height: "300px",
            borderRadius: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.807)",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.123)",
            transition: "transform 0.2s ease, box-shadow 0.3s ease",
            transform: isHovered ? "scale(1.05) translateY(-10px)" : "none",
            zIndex: isHovered ? 10 : "auto",
        },
        cardTitle: {
            fontSize: '1.5em',
            marginBottom: '5px',
        },
        cardContent: {
            fontSize: '1em',
            color: '#333',
        },
        cardPic: {
            width: "15vw",
            height: "18vh",
            position: "relative",
            objectFit: "cover",
            transition: "transform 0.4s ease, box-shadow 1.0s ease",
            zIndex: 5,
            borderRadius: isImgHovered ? "0" : "10px 10px 0 0",
            border: isImgHovered ? "solid black" : "none",
            transform: isImgHovered ? "scale(1.25) translateY(-20px)" : "none",
            boxShadow: isImgHovered
                ? "0px 20px 25px rgba(0, 0, 0, 0.668)"
                : "none",
            backdropFilter: isImgHovered ? "blur(100vh) brightness(50%)" : "none",
        },
        cardText: {
            
            marginLeft: "20px",
            marginRight: "20px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            fontFamily: "sans-serif",
            borderBottom: "solid",
            gap: "5px",
            width: "80%",
        }
    };

    return (
        <div 
            className="card" 
            style={Styles.card} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
        >
            <img 
                className="cardPic" 
                style={Styles.cardPic} 
                src={KakashiImage} 
                alt="Kakashi" 
                onMouseEnter={handleImgMouseEnter} 
                onMouseLeave={handleImgMouseLeave}
            /> 
            <div style={Styles.cardText}>
                <h2 className="card-title" style={Styles.cardTitle}>{title}</h2>
                <p className="card-content" style={Styles.cardContent}>{content}</p>
            </div>
        </div>
    );
};

export default Card;