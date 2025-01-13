import { useState } from "react";
import "./header.css";
import { useEffect } from "react";

function Header() {
  const [showModel, setshowModel] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") || "dark"
  );
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);
  return (
    <header className="flex">
      <button
        className="menu theme "
        onClick={() => {
          setshowModel(true);
        }}
      >
        <span className="icon-menu"></span>
      </button>
      <h2 className="the-hero">Philip</h2>
      <nav>
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#project">Projects</a>
          </li>
          <li>
            <a href="/#services">Services</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="theme moon"
      >
        {theme === "dark" ? (
          <span className="icon-moon" />
        ) : (
          <span className="icon-sun" />
        )}
      </button>
      {showModel && (
        <div className="fixed">
          <ul className="model">
            <li>
              <button
                onClick={() => setshowModel(false)}
                className="icon-cross"
              />
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Project</a>
            </li>
            <li>
              <a href="">Skills</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
