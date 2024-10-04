import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import img from "./right-arrow.png";
import VirtualAssistants from "../comp/virtual assistants.jpg";
import VideoEditors from "../comp/video editors.webp";
import SocialMedia from "../comp/social media.jpg";

const Header = () => {
  return (
    <div className="myheader">
      <header className="hide-when-mobile ali">
        <h1 id="Logo">
          <Link to="/">The Virtual Callers</Link>
        </h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/html">
              Services
            </NavLink>
            <ul className="sub-ul">
              <div id="img1">
                <li>
                  <img
                    className="imgs"
                    src={VirtualAssistants}
                    alt="VirtualAssistants"
                  />
                  <a className="aaa " href="">
                    Virtual Assistants
                    <img className="arrow" src={img} alt="arrow" />
                  </a>
                </li>
              </div>
              <div id="img2">
                <li>
                  <img
                    className="imgs"
                    src={VideoEditors}
                    alt="VirtualAssistants"
                  />
                  <a className="aaa" href="">
                    Video Editors
                    <img className="arrow2" src={img} alt="arrow" />
                  </a>
                </li>
              </div>
              <div id="img3">
                <li>
                  <img className="imgs" src={SocialMedia} alt="SocialMedia" />
                  <a className="aaa" href="">
                    Social Media
                    <img className="arrow3" src={img} alt="arrow" />
                  </a>
                </li>
              </div>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/css">
              Resources
            </NavLink>
            <ul className="sub-ul2">
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li className="mini-projects">
                <a href="">Contact Us</a>
              </li>
            </ul>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/javascript">
              Career
            </NavLink>
            <ul className="sub-ul3 ">
              <li>
                <a href="">Reviews From Customers</a>
              </li>
            </ul>
          </li>
        </ul>

        <button className="button-17" role="button">
          Let's Chat <img id="imgg" src={img} alt="arrow" />
        </button>
      </header>

      <header className="show-when-mobile ali">
        <h1 id="Logo">The Virtual Callers</h1>
        <label className="absolute" htmlFor="burger">
          <i className="fas fa-bars" />
        </label>
        <input id="burger" type="checkbox" />
        <div className="show-on-click">
          <div className="main-div">
            <label htmlFor="html">
              Services <i className="fas fa-plus" />
            </label>
            <input id="html" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/html">Virtual Assistants</NavLink>
              </li>
              <li>
                <a href="">Video editors</a>
              </li>
              <li>
                <a href="">Social Media</a>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="css">
              Resources <i className="fas fa-plus" />
            </label>
            <input id="css" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/css">About Us</NavLink>
              </li>
              <li>
                <a href="">FAQ</a>
              </li>
              <li>
                <label className="mini-projects" htmlFor="mini">
                  Contact Us
                </label>
              </li>
            </ul>
          </div>
          <div className="main-div">
            <label htmlFor="js">
              Career <i className="fas fa-plus" />
            </label>
            <input id="js" type="checkbox" />
            <ul className="sub-div">
              <li>
                <NavLink to="/javascript">coming soon🔥</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
