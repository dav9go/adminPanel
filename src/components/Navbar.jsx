import { useState, useEffect } from "react";
import "../styles/Navbar.css";

/** SPA elements **/

const allPages = ["General", "Products", "Stock", "Sales"];

export default function Navbar({ handleNav }) {
  //Clock state
  const [date, setDate] = useState(null);
  //Open menu state
  const [opened, setOpened] = useState(false);

  //Clock
  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setDate(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return (
    <>
      <nav className="nav-wrapper-phone">
        <h3 className="nav-title">Admin Panel</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="nav-svg w-6 h-6"
          onClick={() => setOpened(!opened)}
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </nav>

      <nav className={`phone-menu ${opened && "phone-menu-opened"}`}>
        <div className="nav-wrapper-phone">
          <h3 className="nav-title phone">Admin Panel</h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="black"
            className="w-6 h-6 nav-svg"
            onClick={() => setOpened(!opened)}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="nav-menu-buttons">
          {allPages.map((item) => (
            <button
              key={item}
              className="page-button-openmenu"
              onClick={() => {
                handleNav(item);
                setOpened(!opened);
              }}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <nav className="nav-wrapper">
        <h3 className="nav-title">
          Admin Panel <span className="user-span">David Gomez</span>
          <span className="user-span"> {date}</span>
        </h3>
        <div>
          {allPages.map((item) => (
            <button
              key={item}
              className="page-button"
              onClick={() => handleNav(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </nav>
    </>
  );
}
