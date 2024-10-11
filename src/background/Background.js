import React from "react";
import "../styles/background.css";
import video from "../assets/pixelated1.mp4";
import fallBackImg from "../assets/fallback-image.png";

const Background = () => {
    return (
        <>
        <div className="shadow-overlay"></div>
        <video 
            playsInline
            autoPlay 
            muted 
            loop 
            preload="auto" 
            id="bg" 
            poster={fallBackImg}
            >
            <source src={video} type="video/mp4"/>
        </video>
        </>
    );
    
};

export default Background;