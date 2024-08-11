import React from "react";
import "./Connections.css";

function Connections({ heading, subheading, link }) {
    return (
        <div className="connection-container">
            <div className="connection-card-wrapper">
                <div className="connection-details-box">
                    <span className="connection-title-text">{heading}</span>
                    <p className="connection-description-text">
                        {subheading}
                    </p>
                    <a 
                        href={link} 
                        className="connection-contact-button" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        Contact
                    </a>
                </div>
                <div className="connection-info-box">
                    <span className="connection-month">Contact</span>
                    <span className="connection-date">Me</span>
                </div>
            </div> 
        </div>
    );
}

export default Connections;
