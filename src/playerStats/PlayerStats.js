import React from "react";
import "../styles/playerStats.css";

const PlayerStats = () => {
    return(
        <div id="playerStats">
            <h1>Tariq Al-Waeel</h1>
            <div id="playerStats_lines">
                <pan id="playerStats_lines_thick"></pan>
                <pan id="playerStats_lines_thin"></pan>
            </div>
            <h2>Nothing good gets committed after 2 a.m.</h2>
        </div>
    );
};

export default PlayerStats;
