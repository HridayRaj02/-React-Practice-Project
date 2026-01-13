import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
    return (
      <>
        <div className="mainheader">
          <div className="headerleft">
            <p className="headerleftcreate">
              Create<span className="headerleftdot">.</span>
            </p>
          </div>
          <div className="headerright">
            <ul>
              <li
                style={{
                  color: "aqua",
                }}
              >
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/error404">Work</Link>
              </li>
              <li>
                <Link to="/error404">Services</Link>
              </li>
              <li>
                <Link to="/error404">About</Link>{" "}
                <span>
                  <RiArrowDropDownLine className="headerrightarrowdown" />
                </span>
              </li>
              <li>
                <Link to="/error404">Blog</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
              <li>
                <Link to={"/login"}>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
}

export default Navbar