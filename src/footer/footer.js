import React from 'react';
import '../styles/footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/tariqo" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          
        </a>
        <a href="https://linkedin.com/in/tariqalwaeel" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          
        </a>
        <a href="https://twitter.com/zoomywho" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
          
        </a>
      </div>
      <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
