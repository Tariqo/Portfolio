import React from 'react';
import { Link, useLocation } from "react-router-dom";
import astronautHelmet from "../assets/astronaut-helmet.png";
import deadEye from "../assets/dead-eye.png";
import stack from "../assets/stack.png";
import envelope from "../assets/envelope.png";
import linkedinIcon from "../assets/linkedin.png"; 
import "../styles/nav.css";

export default function Nav() {
    const location = useLocation();
    
    const getNavPositionClass = () => {
        switch(location.pathname) {
            case "/":
                return "nav-about";
            case "/skills":
                return "nav-skills";
            case "/projects":
                return "nav-projects";
            case "/contact":
                return "nav-contact";
            default:
                return "";
        }
    };

    const getPageTitle = () => {
        switch(location.pathname) {
            case "/":
                return "ABOUT";  
            case "/skills":
                return "SKILLS";
            case "/projects":
                return "PROJECTS";
            case "/contact":
                return "CONTACT";
            default:
                return "";
        }
    }; 

    const navPositionClass = getNavPositionClass();
    const pageTitle = getPageTitle();

    const isCurrentPage = (navClass) => {
        return navClass === navPositionClass;
    };

    const renderNavLink = (to, imgSrc, altText, navClass) => {
        const isCurrent = isCurrentPage(navClass);
        const linkClass = isCurrent ? "nav-link current" : "nav-link";
        
        return (
            <Link to={to} className={linkClass}>
              <img src={imgSrc} alt={altText} />
              {isCurrent && <h1 className="page-title">{pageTitle}</h1>}
            </Link>
          );
    };

    return (
        <nav className={`nav ${navPositionClass}`}>
            {renderNavLink(
                "/",
                astronautHelmet,
                "About-Icon",
                "nav-about"
            )}
            {renderNavLink(
                "/skills",
                deadEye,
                "Skills-Icon",
                "nav-skills"
            )}
            {renderNavLink(
                "/projects",
                stack,
                "Projects-Icon",
                "nav-projects"
            )}
            {renderNavLink(
                "/contact",
                envelope,
                "Contact-Icon",
                "nav-contact"
            )}
            <a 
                href="https://www.linkedin.com/in/tariqalwaeel" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="nav-link linkedin-link"
            >
                <img src={linkedinIcon} alt="LinkedIn-Icon" />
            </a>
        </nav>
    );
}
