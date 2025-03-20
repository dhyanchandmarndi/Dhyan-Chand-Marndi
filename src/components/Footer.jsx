import React from 'react';
import './Footer.css'; // You'll create this CSS file separately

// You can use react-icons instead of Font Awesome
// Install it with: npm install react-icons
import { 
  FaEnvelope, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaTwitter,
  FaDribbble 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="container">
        <div className="footer-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h3>Contact Me</h3>
            <ul className="contact-list">
              <li>
                <a href="mailto:dhyanchandmarndi01@gmail.com">
                  <FaEnvelope className="icon" /> dhyanchandmarndi01@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/dhyan_chand_marndi_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="icon" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/dhyan-chand-marndi-a5370a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="icon" /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com/dhyanchandmarndi" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="icon" /> GitHub
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social Media Icons */}
          <div className="social-links">
            <h3>Connect With Me</h3>
            <div className="social-icons">
              <a href="mailto:dhyanchandmarndi01@gmail.com">
                <FaEnvelope />
              </a>
              <a href="https://www.instagram.com/dhyan_chand_marndi_/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/dhyan-chand-marndi-a5370a238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://github.com/dhyanchandmarndi" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>
              <a href="https://x.com/DhyanMarndi" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="copyright">
          <p>&copy; {new Date().getFullYear()} Dhyan Chand Marndi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;