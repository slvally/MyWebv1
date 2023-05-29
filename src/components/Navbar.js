import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ brandLink }) {
  return (
    <nav className="navbar bg-white flex md:flex-row flex-col justify-between items-center md:py-6 py-5 md:px-24 px-8 font-sans antialiased">
      <div className="branding md:text-3xl text-2xl">
        {brandLink === "link" ? (
          <Link to="/" className="flex">
            <p className="text-first-light">Slvally</p>
            <p className="text-last-light">Shidiqs</p>
          </Link>
        ) : (
          <a href="#home" className="flex">
            <p className="text-first-light">Slvally</p>
            <p className="text-last-light">Shidiqs</p>
          </a>
        )}
      </div>
      <ul className="flex flex-center md:mt-0 mt-3 md:text-xl text-base">
        <li className="mx-3 text-nav-link-light hover:text-nav-link-light-hover">
          <a href="/#about">About</a>
        </li>
        <li className="mx-3 text-nav-link-light hover:text-nav-link-light-hover">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="mx-3 text-nav-link-light hover:text-nav-link-light-hover">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
