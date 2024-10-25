import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

function Header() {
  const [isDark, setIsDark] = useTheme();
  return (
    <header className={`header-container ${isDark ? "dark" : ""}`}>
      <div className="header-content">
        <Link to={"/"} className="title">
          <i className="fa-solid fa-earth-americas spin" />
          Where in the world?
        </Link>
        <p
          className="themeButton"
          onClick={() => {
            setIsDark(!isDark);
            localStorage.setItem("isDarkMode", !isDark);
          }}
        >
          <span className="currentTheme">
            <i className="fas fa-sun spin" /> Light Mode{" "}
          </span>
        </p>
      </div>
    </header>
  );
}

export default Header;
