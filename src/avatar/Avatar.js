import React from 'react';
import PropTypes from "prop-types";
import avatarImg from "../assets/Avatar.png";
import "../styles/avatar.css";


const Avatar = ( {page} ) => {
    const avatarClass = `avatar ${page}`;
    const spanClass = `shadow-overlay-${page}`;

    return (
        <>
        <span class={spanClass}></span>
        <img src={avatarImg} className={avatarClass} alt="Avatar"/>  
        </>
    );
}

Avatar.propTypes = {
    page: PropTypes.string.isRequired,
};

export default Avatar;