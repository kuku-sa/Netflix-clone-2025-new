import React from "react";
import "./footer.css";

// Social icons
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <footer className="footer_outer_container">
      <div className="footer_inner_container">
        
        {/* Social Icons */}
        <div className="footer_icons">
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>

        {/* Footer links */}
        <div className="footer_links">
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
          <ul>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
          <ul>
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>

        {/* Service Code */}
        <div className="footer_service">
          <button>Service Code</button>
        </div>

        {/* Copy */}
        <div className="footer_copy">
          <p>© 2025 Netflix Clone | All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
