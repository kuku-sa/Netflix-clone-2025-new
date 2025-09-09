import React from "react";
import "./header.css";
import NetflixLogo from "../../assets/images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/Notifications";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className="header_outer_container">
      <div className="header_container">
        {/* Left Side */}
        <div className="header_left">
          <img src={NetflixLogo} alt="Netflix Logo" />
          <ul className="desktop_menu">
            <li>Netflix</li>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse by Languages</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneIcon />
            </li>
            <li>
                <AccountBoxIcon />
                </li>
            <li>
                <ArrowDropDownIcon />
                </li>
            <li className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
